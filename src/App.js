import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.sass';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Vyhod from './Components/Vyhod/Vyhod';
import Vyber from './Components/Vyber/Vyber';
import Nejsme from './Components/Nejsme/Nejsme';

class App extends Component {
  render() {
    return (
	    <ParallaxProvider>
	      <div className="App">
	        <Header />
	        <Intro />
	        <Vyhod />
	        <Vyber />
	        <Nejsme />
	      </div>
	     </ParallaxProvider>
    );
  }
}

export default App;
