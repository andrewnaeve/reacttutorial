import React from 'react';
import { shallow } from 'enzyme';
import MovieList from './MovieList';
import { movies } from '../../__mocks__/movies';

const setup = () => {
  const props = {
    deleteMovie: jest.fn(),
    fetchMovies: jest.fn(),
    results: movies
  };
  const wrapper = shallow(<MovieList {...props} />);
  return {
    props,
    wrapper
  };
};

describe('<MovieList />', () => {
  it('should render 10 movies', () => {
    const { wrapper } = setup();
    expect(wrapper.children().length).toEqual(movies.length);
  });
  it('should call the deleteMovie action creator', () => {
    const { wrapper, props } = setup();
    wrapper
      .childAt(1)
      .dive()
      .find('[type="button"]')
      .simulate('click');
    expect(props.deleteMovie).toHaveBeenCalledWith(1);
  });
});
