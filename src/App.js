import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from './layouts';
import MovieList from './components/movies/MovieList';
import { Router } from '@reach/router';
import Poster from './components/movies/Poster';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies, deleteMovie } from './actions/movie-actions';

export class App extends Component {
  state = {
    results: []
  };
  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  render() {
    const {
      movies: { results },
      deleteMovie
    } = this.props;

    return (
      <Layout>
        <Movies>
          <Router>
            <MovieList path="/" results={results} deleteMovie={deleteMovie} />
            <Poster path="/result/:id" results={results} />
          </Router>
        </Movies>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchMovies, deleteMovie }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const Movies = styled.div`
  display: grid;
  width: 100%;
  overflow-y: scroll;
`;
