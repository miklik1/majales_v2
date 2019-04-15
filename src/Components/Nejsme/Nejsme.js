import React, { Component } from 'react';
import './Nejsme.sass';
import sutb from './sutb.svg';
import utb from './utb.png';

class Nejsme extends Component {
  render() {
    return (
      <div className="Nejsme">
        <p className="kopyto">Nejsme na to sami</p>
        <p className="obyc">Každá akce si žádá své partnery. My můžeme být rádi, že máme ty nejlepší z nejlepších.
        Podívejte se, na čem pracují oni!</p>
      </div>
    );
  }
}

export default Nejsme;
