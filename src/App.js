import React, { Component } from 'react';
import './App.sass';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
      </div>
    );
  }
}

export default App;
