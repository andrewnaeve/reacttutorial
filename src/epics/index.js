import { combineEpics } from 'redux-observable';
import { fetchMovies } from './movie-epic';

export const rootEpic = combineEpics(fetchMovies);
