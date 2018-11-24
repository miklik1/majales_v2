import React, { Component } from 'react';
import './App.sass';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Vyhod from './Components/Vyhod/Vyhod';
import Vyber from './Components/Vyber/Vyber';
import Nejsme from './Components/Nejsme/Nejsme';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Vyhod />
        <Vyber />
        <Nejsme />
      </div>
    );
  }
}

export default App;
