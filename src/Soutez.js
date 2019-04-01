import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.sass';
import './Lineup.sass';
import './Components/Vyhod/Vyhod.sass';
import demo from './demo.png'
import udg from './udg.png'
import guitarsyellow from './guitarsyellow.png';

class Home extends Component {
  render() {
  return (
    <div className="App">
      <div className="Vyber soutez">
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce2">
            <p>STAROBRNO SOUTĚŽ KAPEL</p>
            <img className='guitarsyellowBG' src={guitarsyellow} alt='guitarsyellow' />
          </div>
        </div>
      </div>
      <div className="Vyhod">
        <p className="kopyto">Sto piv do zkušebny se vždy hodí</p>
        <p className="obyc">Máte kapelu, hrajete dobře, jste ze Zlínského kraje a máte rádi pivo? 
To splňujete všechny podmínky, abyste se zúčastnili letošní Starobrno soutěže kapel a získali do 
své zkušebny 100 piv zdarma. Vyplň přihlášku do 14. Dubna, nasbírej hlasy od 22. Dubna a vítěze se dozvíš na Majálesu!</p>
      </div>
    </div>
    );
  }
}

export default Home;