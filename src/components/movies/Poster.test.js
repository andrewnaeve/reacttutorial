import React from 'react';
import { shallow } from 'enzyme';
import Poster from './Poster';
import { movies } from '../../__mocks__/movies';

const setup = Component => {
  const props = {
    results: movies,
    index: 0,
    id: movies[0].imdbID
  };
  const wrapper = shallow(<Component {...props} />);
  return {
    props,
    wrapper
  };
};
describe('<Poster />', () => {
  it('Should only render one Poster', () => {
    const { wrapper } = setup(Poster);
    expect(wrapper.length).toEqual(1);
  });
});
