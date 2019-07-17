import React, { Component } from 'react';
import './MovieList.scss';
import data from '../../utils/movieData.json'
import MovieItem from '../MovieItem/'
class MovieList extends Component {

  state = {
    moviename: null,
    movieData: null
  }

  componentDidMount(){
    this.setState({movieData:data})
  }

  handleInputChange = (e) => {
    this.setState({ moviename: e.target.value })
  }

  getData(e) {

  }

  render() {
    if (this.state.movieData) {
      console.log(this.state.movieData)
      return (
          <div className="movie-container">
          <div className="movie-search">
            <input className="movie-search--bar" type="text" placeholder="Enter Mobie name here" onChange={this.handleInputChange} value={this.state.moviename}></input>
            <button onClick={this.getData.bind(this)}>Search</button>
          </div>
          <div className="movie-list">
            <MovieItem moviedata={this.state.movieData}></MovieItem>
          </div>
        </div>
      );
    }
    else{
      return(
        <div>
          <h1>List of Movies</h1>
        </div>
      )
    }
  }
}

export default MovieList;
