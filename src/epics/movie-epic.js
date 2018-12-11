import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import { imdbClient } from '../imdbClient';

import { FETCH_MOVIES, fetchMoviesSuccess, fetchMoviesFailure } from '../actions/movie-actions';

export const fetchMovies = action$ => {
  return action$
    .ofType(FETCH_MOVIES)
    .switchMap(() => {
      const request = imdbClient()
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch');
          }
          return response.json();
        })
        .then(({ Search }) => Search);
      return Observable.from(request);
    })
    .map(fetchMoviesSuccess)
    .catch(error => Observable.of(fetchMoviesFailure(error.message)));
};
