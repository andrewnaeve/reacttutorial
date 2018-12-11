import React from 'react';
import styled from 'styled-components';

export default ({ results, id }) =>
  results
    .filter(result => result.imdbID === id)
    .map(({ Poster, Title }, index) => (
      <PosterImage key={index}>
        <img src={Poster} alt={Title} />
      </PosterImage>
    ));

const PosterImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
