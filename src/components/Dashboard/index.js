import React, { Component } from 'react';
import Navigation from '../Navigation/index'
import MovieList from '../MovieList/index'
import NewShows from '../NewShows/index'
import TVSeries from '../TVSeries/index'
import Upcoming from '../Upcoming/index'
import App from '../../App'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Dashboard.scss';
import data from '../../utils/movieData.json'
// console.log(data)
class Dashboard extends Component {

  render() {
    console.log(this.props, "Dashboard")
    return (
      <Router>
        <div className="movie-data">
          <Navigation></Navigation>
          <Route exact path = "/" component = {MovieList}></Route>
          <Route path="/search" component = {App}></Route>
          <Route path="/tvseries" component = {TVSeries}></Route>
          <Route path="/new" component = {NewShows}></Route>
          <Route path="/upcoming" component = {Upcoming}></Route>
        </div>
      </Router>
    );
  }
}

export default Dashboard;
