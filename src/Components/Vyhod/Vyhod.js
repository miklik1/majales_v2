import React, { Component } from 'react';
import './Vyhod.sass';

class Vyhod extends Component {
  render() {
    return (
      <div className="Vyhod">
        <p className="kopyto">VYHOĎ SI Z KOPÝTKA!</p>
        <p className="obyc">Samé chcíplé zeschlé kundy. Co s tím konečníkem? Mlčení páni zkušení, rád bych vám Majáles nabídnul. Proč se to nepřegrcne tady do toho?</p>
        <button>Koupit lístek</button>
      </div>
    );
  }
}

export default Vyhod;
