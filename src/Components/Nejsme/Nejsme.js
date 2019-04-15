import React, { Component } from 'react';
import './Nejsme.sass';
import sutb from './sutb.svg';
import utb from './utb.png';
import test1 from '../../test1.svg';
import test2 from '../../test2.svg';
import test3 from '../../test3.svg';
import all from '../../all.svg';

class Nejsme extends Component {
  render() {
    return (
      <div className="Nejsme">
        <p className="kopyto">Nejsme na to sami</p>
        <p className="obyc">Každá akce si žádá své partnery. My můžeme být rádi, že máme ty nejlepší z nejlepších.
        Podívejte se, na čem pracují oni!</p>
        <img src={all} className="all" alt="all" />
      </div>
    );
  }
}

export default Nejsme;
