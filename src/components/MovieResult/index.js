import React, { Component } from 'react';
import './MovieResult.scss';
class MovieResult extends Component {
    // TODO:- Make Show More button working...
    // onClick

    state = {
      isToggleOn: true
    }

    toggleClass = () => {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }

    render() {
        let data = this.props.moviedata
        console.log(data)
        if (data == null) {
            return (
                <div className="content-section">
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
                    <button onClick={this.toggleClass}>{this.state.isToggleOn ? 'Show more' : 'Show less'}</button>

                    <div className={this.state.isToggleOn ? 'hide movie-content' : 'show movie-content'}>
                      <div className="movie-info">
                        <div className="movie-info-label">Released Date</div>
                        <div className="movie-info-data">{data.Released}</div>
                      </div>
                      <div className="movie-info">
                        <div className="movie-info-label">Actors</div>
                        <div className="movie-info-data">{data.Actors}</div>
                      </div>
                      <div className="movie-info">
                        <div className="movie-info-label">Genre</div>
                        <div className="movie-info-data">{data.Genre}</div>
                      </div>
                      <div className="movie-info">
                        <div className="movie-info-label">Language</div>
                        <div className="movie-info-data">{data.Language}</div>
                      </div>
                    </div>
                </div>
            )
        }
    }
}

export default MovieResult;
