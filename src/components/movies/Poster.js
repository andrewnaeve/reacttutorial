import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Poster = ({ results, id }) =>
  results
    .filter(result => result.imdbID === id)
    .map(({ Poster, Title }, index) => (
      <PosterImage key={index}>
        <img src={Poster} alt={Title} />
      </PosterImage>
    ));

Poster.propTypes = {
  results: PropTypes.array,
  id: PropTypes.string
};

const PosterImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default Poster;
