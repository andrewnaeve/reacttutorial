import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from '../actions/fetch-movie-actions';

const initialState = {
  results: [],
  isLoading: false,
  error: null
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
    default: {
      return state;
    }
  }
};
