import React, { Component } from 'react';
import './SingleMovieData.scss'
class SingleMovieData extends Component {

  // state = {
  //   dataVal: this.props.data
  // }
  render() {
    // console.log(Object.values(this.props.data))

    // let emptyArray = []
    // emptyArray.push(Object.values(this.props.data))

    // let data = this.state.dataVal
    // console.log(this.state.dataVal)
    return (

      <div className="single-movie">
        <h1>{this.props.data.Title}</h1>
        <p>{this.props.data.Year}</p>
        <div className="image-block">
          <img src={this.props.data.Poster} className="image-responsive" />
        </div>
      </div>
    );
  }
}

export default SingleMovieData;
