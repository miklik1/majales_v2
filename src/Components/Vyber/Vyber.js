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
            <Link to="/Lineup"><p>DOPROVODNÝ PROGRAM</p></Link>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce2">
            <p>line up</p>
            <img className='guitars' src={guitars} alt='guitars' />
          </div>
        </div>
        <div className="sekce3">
          <p>ROZHOVORY S OSOBNOSTMI</p>
          <img className='shoes' src={shoes} alt='shoes' />
        </div>
      </div>

      <Route path="/Lineup" component={Lineup} />
      </div>
    );
  }
}

export default Vyber;
