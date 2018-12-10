import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

export default props => <Movie to={`/result/${props.imdbID}`}>{props.Title}</Movie>;

const Movie = styled(Link)`
  display: flex;
  align-items: center;
  width: 400px;
  min-height: 50px;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.subtleShadow};
  margin-bottom: 20px;
  padding: 5px;
  background: white;
  color: black;
  cursor: pointer;
`;
