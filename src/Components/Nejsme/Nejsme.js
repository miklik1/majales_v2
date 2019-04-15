import React, { Component } from 'react';
import './Nejsme.sass';
import sutb from './sutb.svg';
import utb from './utb.png';
import test1 from '../../test1.svg';

class Nejsme extends Component {
  render() {
    return (
      <div className="Nejsme">
        <p className="kopyto">Nejsme na to sami</p>
        <p className="obyc">Každá akce si žádá své partnery. My můžeme být rádi, že máme ty nejlepší z nejlepších.
        Podívejte se, na čem pracují oni!</p>
        <div className="d-flex bd-highlight razeni">
            <img src={test1} className="zone test1" alt="test1" />
        </div>
      </div>
    );
  }
}

export default Nejsme;
