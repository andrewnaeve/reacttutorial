import { createSelector } from 'reselect';

const getFilter = state => state.movies.filter;
const getMovies = state => state.movies.results;

const convertToLowerCase = string =>
  string
    .split('')
    .map(char => char.toLocaleLowerCase())
    .join('');

export const getFilteredMovies = createSelector(
  getFilter,
  getMovies,
  (filter, movies) => {
    if (filter && filter.length > 0) {
      return movies.filter(movie => convertToLowerCase(movie.Title).includes(filter));
    } else {
      return movies;
    }
  }
);
