import React, { Component } from 'react';
import data from '../../utils/movieData.json'
class MovieDetail extends Component {




// filter ID received in props to the data

  render() {
    console.log(data)
    console.log(this.props.match.params.id)

    let movieID = this.props.match.params.id;

    var filterData = data.filter(function(e) {
    return e.imdbID == movieID
    });


    return (
      <div className="container">
        <h1>Movie Detail component</h1>
        <div>{filterData[0].Title}</div>
      </div>
    );
  }
}

export default MovieDetail;
