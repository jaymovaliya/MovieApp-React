import React, { Component } from 'react';
import './MovieItem.scss';
import SingleMovieData from '../SingleMovieData/index'
class MovieItem extends Component {

  render() {
    return this.props.moviedata.map(singleData => (
      <SingleMovieData data={singleData} />
    ));
  }
}

export default MovieItem;