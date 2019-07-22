import React, { Component } from 'react';
import Navigation from '../Navigation/index'
import MovieList from '../MovieList/index'
import './Dashboard.scss';
import data from '../../utils/movieData.json'
// console.log(data)
class Dashboard extends Component {

  render() {
    console.log(this.props, "Dashboard")
    return (
      <div className="movie-data">
          <Navigation></Navigation>
          <MovieList history={this.props.history}></MovieList>
      </div>
    );
  }
}

export default Dashboard;
