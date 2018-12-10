import React from 'react';
import styled from 'styled-components';

export default ({ results, id }) =>
  results
    .filter(result => result.imdbID === id)
    .map(result => (
      <Poster>
        <img src={result.Poster} alt={result.Title} />
      </Poster>
    ));

const Poster = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
