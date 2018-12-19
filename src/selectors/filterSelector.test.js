import { getFilteredMovies } from './filterSelector';
import { moviePayload } from '../__mocks__/movies';

const state = { movies: { filter: 'on the moon', results: [...moviePayload] } };

describe('Test for filterSelector', () => {
  it('should correctly filter results', () => {
    const [result] = getFilteredMovies(state);
    expect(result.Title).toEqual('Amazon Women on the Moon');
  });
});
