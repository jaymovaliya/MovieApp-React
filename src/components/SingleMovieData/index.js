import React, { Component } from 'react';
import './SingleMovieData.scss'
class SingleMovieData extends Component {

  //  rating = this.props.data.Ratings.map((item, key) =>
  //
  // );
  render() {
  return (

      <div className="single-movie">
        <div className="image-block">
          <img src={this.props.data.Poster} className="image-responsive" />
        </div>
        <h1>{this.props.data.Title}</h1>
        <h2></h2>
      </div>
    );
  }
}

export default SingleMovieData;
