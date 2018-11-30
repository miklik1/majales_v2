import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Intro.sass';
import boss from './boss-pc.png';
import cubeBG from './cubeBG-pc.png';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <div className="jmenoBox"> Kapitán <br></br> Demo </div>
	        <div className="introImages">
			    <Parallax
			        className="custom-class"
			        offsetYMax={30}
			        offsetYMin={-30}
			        slowerScrollRate
			        tag="figure"
			    >
			      	<img className='cubeBG' src={cubeBG} alt='cubeBG' />
			    </Parallax>
	      	<img className='boss' src={boss} alt='boss' />
	      </div>
      </div>
    );
  }
}

export default Intro;
