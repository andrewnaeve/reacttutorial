import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';
import { movies } from './__mocks__/movies';

describe('<App />', () => {
  it('renders without crashing', () => {
    const props = {
      fetchMovies: jest.fn(),
      deleteMovie: jest.fn(),
      movies: {
        results: movies
      }
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
