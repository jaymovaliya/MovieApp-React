import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SingleMovieData.scss'
class SingleMovieData extends Component {

  //  rating = this.props.data.Ratings.map((item, key) =>
  //
  // );
  render() {
    // console.log(this.props.data)
  return (
      <div className="single-movie">
        <Link to={`/movies/${this.props.data.imdbID}`}>
        <div className="image-block">
          <img src={this.props.data.Poster} className="image-responsive" />
        </div>
        <h1>{this.props.data.Title}</h1>
        </Link>
      </div>
    );
  }
}

export default SingleMovieData;
