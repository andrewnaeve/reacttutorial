import React from 'react';
import { shallow } from 'enzyme';
import Poster from './Poster';
import { movieState } from '../../__mocks__/movies';

const setup = Component => {
  const props = {
    results: Object.values(movieState),
    index: 0,
    id: 'tt0092546'
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
