import React, { Component } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar'
import Navigation from './components/Navigation/index'
class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <SearchBar></SearchBar>
      </div>
    );
  }
}

export default App;
