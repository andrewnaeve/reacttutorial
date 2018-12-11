import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';
import { moviePayload } from './__mocks__/movies';
import { getFilteredMovies } from './selectors/filterSelector';

describe('<App />', () => {
  it('renders without crashing', () => {
    const state = { movies: { filter: '', results: moviePayload } };
    const props = {
      fetchMovies: jest.fn(),
      deleteMovie: jest.fn(),
      movies: getFilteredMovies(state)
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
