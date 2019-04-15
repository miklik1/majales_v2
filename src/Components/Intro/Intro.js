import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Intro.sass';
import boss from './boss-pc.png';
import cubeBG from './cubeBG-pc.png';
import lvcas from './LVCAS_blue@2x.png';
import udgb from '../../udgb.png';
import { ParallaxProvider } from 'react-scroll-parallax';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
      <ParallaxProvider>
        <div className="jmenoBox"> UDG <br /> Lvcas Dope <br /> Kapitán Demo <br /> a další </div>
        <Parallax y={[-40, 40]} tagOuter="figure">
		            <img className='cubeBG' src={cubeBG} alt='cubeBG' />
        </Parallax>
	    <img className='boss' src={boss} alt='boss' />
	    <img className='lvcas' src={lvcas} alt='lvcas' />
      <img className='udgb' src={udgb} alt='udgb' />
      </ParallaxProvider>
      </div>
    );
  }
}

export default Intro;
