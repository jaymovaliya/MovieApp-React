import React, { Component } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/index'
class App extends Component {

  render() {
    return (
      <div className="App kam">
        <SearchBar></SearchBar>
      </div>
    );
  }
}

export default App;
