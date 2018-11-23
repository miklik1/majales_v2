import React, { Component } from 'react';
import './App.sass';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Vyber from './Components/Vyber/Vyber';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Vyber />
      </div>
    );
  }
}

export default App;
