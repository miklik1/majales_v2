import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.sass';
import './Lineup.sass';
import './Doprogram.sass';
import './Components/Vyhod/Vyhod.sass';
import demo from './demo.png'
import udg from './udg.png'
import cubeBG from './Components/Intro/cubeBG-pc.png';

class Home extends Component {
  render() {
  return (
    <div className="App">
      <div className="Vyber about">
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce2">
            <p>O nás</p>
            <img className='cubeBG' src={cubeBG} alt='cubeBG' />
          </div>
        </div>
      </div>
      <div className="Vyhod">
        <p className="kopyto">Už pošesté se Studentskou unií UTB</p>
        <p className="obyc">Oslava jara, slastí studentského života, muziky a tance! To je oč tu běží. Univerzita
         Tomáše Bati ve Zlíně ve spolupráci se Studentskou unií UTB na tebe i letos chystají nadupanou akci, která
          si klade za cíl jediné – aby to byl zážitek! </p>
      </div>
      <div className="App doprogram">
       <div className="seznam">
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce1">
            <p>MANAŽER AKCE</p>
            <span className="popis">Věčná majálesová sláva, roční zásoba piva Starobrno
             a možnost zahrát si před zlínskou veřejností - to čeká vítěze souboje kapel.
            </span>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce2">
            <p>FUNDRAISING</p>
            <span className="popis">Čistý festival zajišťuje od roku 2008 třídění odpadů na českých
             hudebních festivalech. Najdi barevné koše nebo náš stánek, třiď odpady a získej recyklované odměny.
            </span>
          </div>
        </div>
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce3">
            <p>KAPELY</p>
            <span className="popis">Takovou párty Zlín ještě neslyšel, aneb nejtišší kalba na střeše jednadvacítky. 
            To by Baťa koukal! Pro více info sleduj fb událost.
            </span>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce4">
            <p>PROPAGACE</p>
            <span className="popis">Tato zahřívačka pro všechny nedočkavce, kterým už skáčou kopýtka před Majálesem. 
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}

export default Home;