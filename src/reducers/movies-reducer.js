import produce from 'immer';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  DELETE_MOVIE,
  FILTER_MOVIES
} from '../actions/movie-actions';

export const initialState = {
  results: {},
  isLoading: false,
  error: null,
  filter: ''
};

export default (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line
    switch (action.type) {
      case FETCH_MOVIES:
        draft.isLoading = true;
        draft.error = null;
        break;
      case FETCH_MOVIES_SUCCESS:
        console.log(action.payload);
        action.payload.forEach(movie => {
          draft.results[movie.imdbID] = movie;
        });
        draft.isLoading = false;
        draft.error = null;
        break;
      case FETCH_MOVIES_FAILURE:
        draft.results = null;
        draft.isLoading = false;
        draft.error = action.payload;
        break;
      case DELETE_MOVIE:
        delete draft.results[action.payload];
        break;
      case FILTER_MOVIES:
        draft.filter = action.payload;
        break;
    }
  });
