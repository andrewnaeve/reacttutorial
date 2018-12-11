import React from 'react';
import { shallow } from 'enzyme';
import MovieFilter from './MovieFilter';

const setup = Component => {
  const props = {
    handleChange: jest.fn(),
    filter: ''
  };
  const wrapper = shallow(<Component {...props} />);
  return {
    props,
    wrapper
  };
};

describe('<MovieFilter />', () => {
  it('Should call handle change with correct input', () => {
    const { wrapper, props } = setup(MovieFilter);
    wrapper
      .find('MovieFilter__StyledInput')
      .simulate('change', { currentTarget: { value: 'Amazon' } });
    expect(props.handleChange).toHaveBeenCalledWith({ currentTarget: { value: 'Amazon' } });
  });
});
