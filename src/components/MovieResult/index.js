import React, { Component } from 'react';
import './MovieResult.scss';
class MovieResult extends Component {
    // TODO:- Make Show More button working...
    // onClick
    render() {
        let data = this.props.moviedata
        console.log(data)
        if (data == null) {
            return (
                <div className="App">
                    <h1>No Movies</h1>
                </div>
            );
        }
        else {
            return (
                <div>
                    <img src={data.Poster} width="150px" height="250px"/>
                    <h1>{data.Title}</h1>
                    <h3>{data.Year}</h3>
                    <button>Show More...</button>
                </div>
            )
        }
    }
}

export default MovieResult;