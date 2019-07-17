import React, { Component } from 'react';
import Navigation from '../Navigation/index'
import MovieList from '../MovieList/index'
import './Dashboard.scss';
import data from '../../utils/movieData.json'
// console.log(data)
class Dashboard extends Component {

  render() {
    return (
      <div className="movie-data">
          <Navigation></Navigation>
          <MovieList></MovieList>
      </div>
    );
  }
}

export default Dashboard;
