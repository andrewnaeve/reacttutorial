import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { imdbClient } from '../imdbClient';

import {
  FETCH_MOVIES,
  fetchMoviesSuccess,
  fetchMoviesFailure
} from '../actions/fetch-movie-actions';

export const fetchMovies = action$ => {
  return action$
    .ofType(FETCH_MOVIES)
    .switchMap(() => {
      return imdbClient()
        .then(response => response.json())
        .then(({ Search }) => Search);
    })
    .map(user => fetchMoviesSuccess(user))
    .catch(error => Observable.of(fetchMoviesFailure(error.message)));
};
