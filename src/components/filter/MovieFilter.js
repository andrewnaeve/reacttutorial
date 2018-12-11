import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const MovieFilter = ({ handleChange, filter }) => (
  <StyledInput type="text" placeholder="filter..." onChange={handleChange} value={filter} />
);

MovieFilter.propTypes = {
  handleChange: PropTypes.func,
  filter: PropTypes.string
};

const StyledInput = styled.input`
  width: 200px;
  min-height: 30px;
  margin-bottom: 10px;
  font-size: 18px;
`;

export default MovieFilter;
