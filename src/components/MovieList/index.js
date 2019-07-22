import React, { Component } from 'react';
import './MovieList.scss';
import data from '../../utils/movieData.json'
import MovieItem from '../MovieItem/'
// import { withRouter } from 'react-router-dom';
class MovieList extends Component {

  state = {
    moviename: '',
    movieData: null
  }

  componentDidMount(){
    this.setState({movieData:data})
  }

  handleInputChange = (e) => {
    this.setState({moviename:e.target.value})

    let newData = data.filter(item => {
        return item.Title.toLowerCase().includes(e.target.value);
    });

    this.setState({movieData:newData})
    console.log(newData)

  }

  getData(e) {
    this.props.history.push({
      pathname: 'search'
    })
  }

  render() {
    if (this.state.movieData) {
      // console.log(this.state.movieData)
      return (
          <div className="movie-container">
          <div className="movie-search">
            <input className="movie-search--bar" type="text" placeholder="Enter Movie name here" onChange={this.handleInputChange} value={this.state.moviename}></input>
            <button onClick={this.getData.bind(this)}>More Movies</button>
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
// export default withRouter(MovieList);
