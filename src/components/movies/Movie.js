import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

export default ({ imdbID, Title, index, deleteMovie }) => (
  <Container>
    <Movie to={`/result/${imdbID}`}>{Title}</Movie>
    <DeleteButton type="button" className="delete-movie" onClick={() => deleteMovie(index)}>
      X
    </DeleteButton>
  </Container>
);

const Movie = styled(Link)`
  display: flex;
  align-items: center;
  padding: 5px;
  color: black;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  min-height: 50px;
  height: 50px;
  cursor: pointer;
  background: red;
  box-shadow: ${({ theme }) => theme.subtleShadow};
  background: white;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const DeleteButton = styled.button`
  height: 80%;
  width: 30px;
  appearance: none;
  text-decoration: none;
  border: none;
  border-left: 1px solid black;
  cursor: pointer;
  outline: none;
`;
