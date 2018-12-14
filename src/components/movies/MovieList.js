import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import PropTypes from 'prop-types';

function MovieList({ results, deleteMovie }) {
  return (
    <Container>
      {results &&
        results.map((data, index) => (
          <Movie key={data.imdbID} index={index} deleteMovie={deleteMovie} {...data} />
        ))}
    </Container>
  );
}

MovieList.propTypes = {
  results: PropTypes.array,
  deleteMovie: PropTypes.func
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default MovieList;
