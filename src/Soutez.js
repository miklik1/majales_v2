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
            <p>JSME ČISTÝ FESTIVAL</p>
            <img className='guitarsyellowBG' src={guitarsyellow} alt='guitarsyellow' />
          </div>
        </div>
      </div>
      <div className="Vyhod">
        <p className="kopyto">Jak třídit odpady na Majálesu UTB za odměnu</p>
        <p className="obyc">Na Majálesu UTB 2019 můžete třídit odpady a na stánku Čistý festival za to dostat odměnu.
         Tam se dárku dočká každý, kdo přinese určité množství plastů nebo papírů. Jak na to? Stačí přinést deset nebo dvacet plastů / papírů 
         přímo na stánek Čistý festival. Tam je lze vyměnit za stírací los. Celkem můžete vyhrát devět různých odměn. Ani letos
         nechybí speciální odměna pro žíznivé fanoušky. Dvacet tříděných kusů plastů, například pivních kelímků, 
         odměňujeme speciálním žetonem na jedno pivo zdarma! </p>
         <p className="kopyto">Jak třídit na Majálesu UTB do barevných košů?</p>
        <p className="obyc">Odpady můžete také třídit do několika speciálních barevných košů přímo ve festivalovém areálu. 
        Žluté koše jsou na plasty a modré na papír. Všechny odpady z barevných košů úklidová četa sváží do speciálních velkých kontejnerů, 
        které putují přímo k druhotnému zpracování - recyklaci. Pokud budete mít štěstí 
        a při třídění do barevných košů vás přistihne promoteam Čistý festival, získáte zdarma recyklovaný znovupoužitelný kelímek 
        ze speciální limitované edice.  </p>
         <p className="kopyto">Majáles UTB je ČISTÝ FESTIVAL </p>
        <p className="obyc">Kromě toho, že u nás budete třídit odpady, pomůžete také našemu majálesu získat certifikaci Čistý festival. 
        Tato certifikace je již 11 let udělována společností EKO-KOM, a.s. odpovědným festivalům a letním akcím za to, že umožňují svým 
        návštěvníkům třídit odpady a snaží se udržovat své areály čisté. Čistý festival prostě změnil české festivaly. </p>
      </div>
    </div>
    );
  }
}

export default Home;