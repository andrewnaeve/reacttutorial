import * as types from '../actions/movie-actions';
import reducer, { initialState } from './movies-reducer';
import { moviePayload } from '../__mocks__/movies';

describe('Tests for movies-reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ ...initialState });
  });
  it('should handle FETCH_MOVIE_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_MOVIES_SUCCESS,
        payload: moviePayload
      })
    ).toEqual({
      results: moviePayload,
      isLoading: false,
      error: null,
      filter: ''
    });
  });
  it('should handle DELETE_MOVIE', () => {
    expect(
      reducer(
        {
          results: moviePayload,
          isLoading: false,
          error: null
        },
        {
          type: types.DELETE_MOVIE,
          payload: 'tt0092546'
        }
      ).results.length
    ).toEqual(moviePayload.length - 1);
  });
  it('should handle FILTER_MOVIES', () => {
    expect(
      reducer(undefined, {
        type: types.FILTER_MOVIES,
        payload: 'amazon'
      })
    ).toEqual({
      results: [],
      isLoading: false,
      error: null,
      filter: 'amazon'
    });
  });
});
