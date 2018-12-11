import produce from 'immer';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  DELETE_MOVIE,
  FILTER_MOVIES
} from '../actions/movie-actions';

export const initialState = {
  results: [],
  isLoading: false,
  error: null,
  filter: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        results: action.payload,
        isLoading: false,
        error: null
      };
    case FETCH_MOVIES_FAILURE:
      return {
        results: null,
        isLoading: false,
        error: action.payload
      };
    case DELETE_MOVIE:
      return {
        ...state,
        results: produce(state.results, draftState => {
          draftState.splice(action.payload, 1);
        })
      };
    case FILTER_MOVIES:
      return {
        ...state,
        filter: action.payload
      };
    default: {
      return state;
    }
  }
};
