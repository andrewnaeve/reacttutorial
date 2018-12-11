export const FETCH_MOVIES = 'FETCH_MOVIES';
export const fetchMovies = () => ({
  type: FETCH_MOVIES
});

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies
});

export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const fetchMoviesFailure = message => ({
  type: FETCH_MOVIES_FAILURE,
  payload: message
});

export const DELETE_MOVIE = 'DELETE_MOVIE';
export const deleteMovie = index => ({
  type: DELETE_MOVIE,
  payload: index
});
