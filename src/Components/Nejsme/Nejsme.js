import React, { Component } from 'react';
import './Nejsme.sass';
import sutb from './sutb.svg';
import utb from './utb.svg';

class Nejsme extends Component {
  render() {
    return (
      <div className="Nejsme">
        <p className="kopyto">Nejsme na to sami</p>
        <p className="obyc">Každá akce si žádá své partnery. My můžeme být rádi, že máme ty nejlepší z nejlepších.
        Podívejte se, na čem pracují oni!</p>
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight"><p className="sutb">Majáles UTB pořádá</p></div>
          <div className="p-2 flex-fill bd-highlight"><img className="sutb" src={sutb} alt="sutb" /></div>
          <div className="p-2 flex-fill bd-highlight"><p>ve spolupráci s</p></div>
          <div className="p-2 flex-fill bd-highlight"><img className="utb" src={utb} alt="utb" /></div>
        </div>
          <div className="p-2 flex-fill bd-highlight"><p className="sutb">Majáles UTB pořádá</p></div>
          <div className="p-2 flex-fill bd-highlight"><img className="sutb" src={sutb} alt="sutb" /></div>
      </div>
    );
  }
}

export default Nejsme;
