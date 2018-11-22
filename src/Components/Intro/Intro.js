import React, { Component } from 'react';
import './Intro.sass';
import boss from './boss.png';
import cubeBG from './cubeBG.png';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
      <div className="jmenoBox"> Kapitán <br></br> Demo </div>
	      <div className="introImages">
	      	<img className='cubeBG' src={cubeBG} alt='cubeBG' />
	      	<img className='boss' src={boss} alt='boss' />
	      </div>
      </div>
    );
  }
}

export default Intro;
