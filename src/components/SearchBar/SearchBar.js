import React, { Component } from 'react';
import './SearchBar.scss';
import MovieResult from '../MovieResult/'
class SearchBar extends Component {

  state = {
    moviename: null,
    movieData: null
  }

  handleInputChange = (e) => {
    this.setState({ moviename: e.target.value })
  }

  getData(e) {
    const movieName = this.state.moviename
    const apiKey = `ce140d45`
    const plot = `short`
    const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}&plot=${plot}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({movieData:data})
      })
      .catch(err => console.error(err))

  }

  render() {
    return (
      <div className="searchBar">
        <input className="appInput" type="text" placeholder="Enter Mobie name here" onChange={this.handleInputChange} value={this.state.moviename}></input>
        <button onClick={this.getData.bind(this)}>Search</button>
        <MovieResult moviedata={this.state.movieData}></MovieResult>
      </div>
    );
  }
}

export default SearchBar;
