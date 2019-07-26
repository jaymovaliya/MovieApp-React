import React, { Component } from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom'
class Navigation extends Component {


  render() {
    return (
      <nav id="sidebar-nav">
        <ul className="sf-menu">

            <li className="normal-item-pro current-menu-item">
              <Link to="/tvseries">
              <i className="fas fa-tv"></i>
              TV Series
              </Link>
                </li>


            <li className="normal-item-pro">
              <Link to="/">
              <i className="fas fa-film"></i>
                Movies
              </Link>
                </li>


            <li className="normal-item-pro">
              <Link to="/search">
              <span className="icon-Movie"></span>
                Playlists
              </Link>
                </li>


            <li className="normal-item-pro">
              <Link to="/new">
              <span className="icon-Movie-Ticket"></span>
              New Arrivals
              </Link>
                </li>


            <li className="normal-item-pro">
              <Link to="/upcoming">
              <span className="icon-Clock"></span>
              Coming Soon
              </Link>
                </li>


        </ul>
      </nav>
    );
  }
}
export default Navigation;
