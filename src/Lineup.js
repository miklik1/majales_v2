import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.sass';
import Intro2 from './Components/Intro/Intro2';

class Home extends Component {
  render() {
  return (
    <div className="App">
      <Intro2 />
      <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce1">
            <p>ahoj</p>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce2">
            <p>line up</p>
          </div>
        </div>
    </div>
    );
  }
}

export default Home;