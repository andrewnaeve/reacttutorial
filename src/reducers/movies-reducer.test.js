import * as types from '../actions/movie-actions';
import reducer, { initialState } from './movies-reducer';
import { movies } from '../__mocks__/movies';

describe('Tests for movies reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ ...initialState });
  });
  it('should handle FETCH_MOVIE_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_MOVIES_SUCCESS,
        payload: movies
      })
    ).toEqual({
      results: movies,
      isLoading: false,
      error: null
    });
  });
  it('should handle DELETE_MOVIE', () => {
    expect(
      reducer(
        {
          results: movies,
          isLoading: false,
          error: null
        },
        {
          type: types.DELETE_MOVIE,
          payload: 0
        }
      ).results.length
    ).toEqual(9);
  });
});
