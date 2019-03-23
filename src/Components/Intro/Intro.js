import React, { Component } from 'react'
import './Intro.sass';
import boss from './boss-pc.png';
import cubeBG from './cubeBG-pc.png';
import lvcas from './LVCAS_blue@2x.png';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <div className="jmenoBox"> Kapitán <br></br> Demo </div>
        <div className="jmenoBox2"> LVCAS <br></br> Dope </div>
		<img className='cubeBG' src={cubeBG} alt='cubeBG' />
	    <img className='boss' src={boss} alt='boss' />
	    <img className='lvcas' src={lvcas} alt='lvcas' />
      </div>
    );
  }
}

export default Intro;
