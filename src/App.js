import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';
import Header from './Components/header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <services />
        <web />
        <prices />
        <social />
        <advertising />
        <contact />
      </div>
    );
  }
}

export default App;
