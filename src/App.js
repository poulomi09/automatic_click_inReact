import React, { Component } from 'react';
import SWAPI_Container from './component/SWAPI_Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Welcome to Star Wars Movie List
        </header>
        <SWAPI_Container />
      </div>
    );
  }
}

export default App;
