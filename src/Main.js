import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'; 
import './Main.scss';
import App from './App'
import Dashboard from './components/Dashboard'

class Main extends Component {
  render() {
    return (
      <BrowserRouter>  
        <div className="main">
          <Route exact path="/" component={Dashboard}/>
          <Route path="/search" component={App}/>         
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;