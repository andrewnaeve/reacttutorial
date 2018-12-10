import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';

export default ({ results }) => (
  <MovieList>
    {results.map(data => (
      <Movie key={data.imdbID} {...data} />
    ))}
  </MovieList>
);

const MovieList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
