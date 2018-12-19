import { createSelector } from 'reselect';

const getFilter = state => state.movies.filter;
const getMovies = state => state.movies.results;

export const getFilteredMovies = createSelector(
  getFilter,
  getMovies,
  (filter, movies) => {
    if (filter && filter.length > 0) {
      const matcher = new RegExp(filter, 'gi');
      return movies.filter(movie => movie.Title.match(matcher));
    } else {
      return movies;
    }
  }
);
