import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';

export default ({ results, deleteMovie }) => (
  <MovieList>
    {results &&
      Object.values(results).map((data, index) => (
        <Movie key={data.imdbID} index={index} deleteMovie={deleteMovie} {...data} />
      ))}
  </MovieList>
);

const MovieList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
