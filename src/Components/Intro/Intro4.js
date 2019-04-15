import React, { Component } from 'react';
import '../Vyber/Vyber.sass';
import cubeBG from './cubeBG-pc.png';

class Intro4 extends Component {
  render() {
    return (
      <div className="Vyber intro4 rozhovory">
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce2">
            <p>O nás</p>
            <img className='cubeBG' src={cubeBG} alt='cubesBG' />
          </div>
        </div>
      </div>
    );
  }
}

export default Intro4;
