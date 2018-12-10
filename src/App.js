import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from './layouts';
import { imdbClient } from './imdbClient';
import MovieList from './components/movies/MovieList';
import { Router } from '@reach/router';
import Poster from './components/movies/Poster';

class App extends Component {
  state = {
    results: []
  };
  componentDidMount() {
    this.searchImdb();
  }
  render() {
    const { results } = this.state;
    console.log(results);
    return (
      <Layout>
        <Movies>
          <Router>
            <MovieList path="/" results={results} />
            <Poster path="/result/:id" results={results} />
          </Router>
        </Movies>
      </Layout>
    );
  }
  searchImdb() {
    return imdbClient()
      .then(response => {
        if (!response.ok) {
          throw new Error('There has been an error');
        }
        return response.json();
      })
      .then(({ Search }) => {
        this.setState({ results: Search });
      });
  }
}

export default App;

const Movies = styled.div`
  display: grid;
  width: 100%;
  overflow-y: scroll;
`;
