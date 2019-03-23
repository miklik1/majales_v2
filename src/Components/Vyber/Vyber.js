import React, { Component } from 'react';
import './Vyber.sass';
import guitars from './guitars.png';

class Vyber extends Component {
  render() {
    return (
      <div className="Vyber">
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce1">
            <p>DOPROVODNÝ PROGRAM</p>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce2">
            <p>line up</p>
            <img className='guitars' src={guitars} alt='guitars' />
          </div>
        </div>
        <div className="sekce3"><p>ROZHOVORY S OSOBNOSTMI</p></div>
      </div>
    );
  }
}

export default Vyber;
