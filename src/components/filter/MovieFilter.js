import React from 'react';
import styled from 'styled-components/macro';

export default ({ handleChange, filter }) => (
  <StyledInput type="text" placeholder="filter..." onChange={handleChange} value={filter} />
);

const StyledInput = styled.input`
  width: 200px;
  min-height: 30px;
  margin-bottom: 10px;
  font-size: 18px;
`;
