import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Vyber.sass';
import guitars from './guitars-pc.png';
import shoes from './shoes2.svg';

import Lineup from '../../Lineup';

class Vyber extends Component {
  render() {
    return (
      <div>
      <div className="Vyber">
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce1">
            <Link to="/Doprogram"><p className="textZoom">DOPROVODNÝ PROGRAM</p></Link>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce2">
            <Link to="/Lineup"><p className="textZoom">line up</p></Link>
            <img className='guitars' src={guitars} alt='guitars' />
          </div>
        </div>
        <div className="sekce3">
          <Link to="/Cisty"><p className="textZoom">jsme čistý festival</p></Link>
          <img className='shoes' src={shoes} alt='shoes' />
        </div>
      </div>
      </div>
    );
  }
}

export default Vyber;
