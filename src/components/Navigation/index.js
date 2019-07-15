import React, { Component } from 'react';
import './Navigation.scss';
class Navigation extends Component {


  render() {
    return (
          <nav id="sidebar-nav">
              <ul className="sf-menu">
                <li className="normal-item-pro current-menu-item">
                  <a href="dashboard-home.html">
                  <i className="fas fa-tv"></i>
                    TV Series
                  </a>
                </li>
                <li className="normal-item-pro">
                  <a href="">
          		      <i className="fas fa-film"></i>
                    Movies
                  </a>
                </li>
                <li className="normal-item-pro">
                  <a href="">
          		<span className="icon-Movie"></span>
                    Playlists
                  </a>
                </li>
                <li className="normal-item-pro">
                  <a href="">
          		<span className="icon-Movie-Ticket"></span>
                    New Arrivals
                  </a>
                </li>
                <li className="normal-item-pro">
                  <a href="l">
          		<span className="icon-Clock"></span>
                    Coming Soon
                  </a>
                </li>

              </ul>
              <div className="clearfix"></div>
          </nav>
        );
      }
    }
export default Navigation;
