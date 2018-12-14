import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from './layouts';
import MovieList from './components/movies/MovieList';
import { Router } from '@reach/router';
import Poster from './components/movies/Poster';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies, deleteMovie, filterMovies } from './actions/movie-actions';
import { getFilteredMovies } from './selectors/filterSelector';
import MovieFilter from './components/filter/MovieFilter';

export class App extends Component {
  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  render() {
    const { movies, deleteMovie, filter } = this.props;
    return (
      <Layout>
        <Movies>
          <MovieFilter handleChange={this.handleChange} filter={filter} />
          <Router>
            <MovieList path="/" results={movies} deleteMovie={deleteMovie} />
            <Poster path="/result/:id" results={movies} />
          </Router>
        </Movies>
      </Layout>
    );
  }
  handleChange = ({ target: { value = '' } }) => {
    const { filterMovies } = this.props;
    filterMovies(value.toLowerCase());
  };
}

const mapStateToProps = state => {
  return {
    movies: getFilteredMovies(state),
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchMovies, deleteMovie, filterMovies }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const Movies = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
`;
