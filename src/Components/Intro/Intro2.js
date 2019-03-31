import React, { Component } from 'react';
import '../Vyber/Vyber.sass';
import guitars from '../Vyber/guitars-pc.png';

class Intro2 extends Component {
  render() {
    return (
      <div className="Vyber">
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce2">
            <p>line up</p>
            <img className='guitarBG' src={guitars} alt='guitars' />
          </div>
        </div>
      </div>
    );
  }
}

export default Intro2;
