export const FETCH_MOVIES = 'FETCH_MOVIE';
export const fetchMovies = () => ({
  type: FETCH_MOVIES
});

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies
});

export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIE_FAILURE';
export const fetchMoviesFailure = message => ({
  type: FETCH_MOVIES_FAILURE,
  payload: message
});
