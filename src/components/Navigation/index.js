import React, { Component } from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom'
class Navigation extends Component {


  render() {
    return (
      <nav id="sidebar-nav">
        <ul className="sf-menu">
          <Link to="/tvseries">
            <li className="normal-item-pro current-menu-item">
              <i className="fas fa-tv"></i>
              TV Series
                </li>
          </Link>
          <Link to="/">
            <li className="normal-item-pro">

              <i className="fas fa-film"></i>
              Movies
                </li>
          </Link>
          <Link to="/search">
            <li className="normal-item-pro">

              <span className="icon-Movie"></span>
              Playlists
                </li>
          </Link>
          <Link to="/new">
            <li className="normal-item-pro">

              <span className="icon-Movie-Ticket"></span>
              New Arrivals
                </li>
          </Link>
          <Link to="/upcoming">
            <li className="normal-item-pro">

              <span className="icon-Clock"></span>
              Coming Soon
                </li>
          </Link>

        </ul>
        <div className="clearfix"></div>
      </nav>
    );
  }
}
export default Navigation;
