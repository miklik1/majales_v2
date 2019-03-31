import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.sass';
import Intro from './Components/Intro/Intro';
import Vyhod from './Components/Vyhod/Vyhod';
import Vyber from './Components/Vyber/Vyber';
import Nejsme from './Components/Nejsme/Nejsme';

class Home extends Component {
  render() {
  return (
    <div className="App">
          <Intro />
          <Vyhod />
          <Vyber />
          <Nejsme />
    </div>
    );
  }
}

export default Home;