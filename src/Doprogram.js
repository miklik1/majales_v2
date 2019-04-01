import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.sass';
import './Lineup.sass';
import './Doprogram.sass';
import './Components/Vyhod/Vyhod.sass';
import Intro3 from './Components/Intro/Intro3';
import demo from './demo.png'
import udg from './udg.png'

class Home extends Component {
  render() {
  return (
    <div className="App doprogram">
      <Intro3 />
      <div className="Vyhod">
        <p className="kopyto">Hody hody - doprovody!</p>
        <p className="obyc">Oslava jara neprobíhá jen jeden den v roce, jaro se slaví celé období. 
        Proto pro vás máme v rámci předmajálesového času připraveny čtyři nadupané akce, každá ze 
        zcela jiného soudku, ale s přesným účelem - pobavit vás! </p>
      </div>
       <div className="seznam">
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce1">
            <p>Souboj kapel</p>
            <span className="popis">Věčná majálesová sláva, roční zásoba piva Starobrno
             a možnost zahrát si před zlínskou veřejností - to čeká vítěze souboje kapel.
            </span>
            <span className="poslech">
              PŘIHLÁSIT
            </span>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce2">
            <p>Kino</p>
            <span className="popis">Pustit si kvalitní kultovku doma na videu
             je vždycky záruka kvalitního večera, ale zajít si na klasiku do kina? To ti zprostředkujeme v rámci majálesového kina jenom my.
            </span>
            <span className="poslech">
              POSLECH
            </span>
          </div>
        </div>
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce3">
            <p>SILENT DISCO</p>
            <span className="popis">Takovou párty Zlín ještě neslyšel, aneb nejtišší kalba na střeše jednadvacítky. 
            To by Baťa koukal! Pro více info sleduj fb událost.
            </span>
            <span className="poslech">
              UDÁLOST
            </span>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce4">
            <p>WARM UP PARTY</p>
            <span className="popis">Tato zahřívačka pro všechny nedočkavce, kterým už skáčou kopýtka před Majálesem. 
            </span>
            <span className="poslech">
              UDÁLOST
            </span>
          </div>
        </div>
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce5">
            <p>ČISTÝ FESTIVAL</p>
            <span className="popis">Čistý festival zajišťuje od roku 2008 třídění odpadů na českých
             hudebních festivalech. Najdi barevné koše nebo náš stánek, třiď odpady a získej recyklované odměny.
            </span>
            <span className="poslech">
              INFORMACE
            </span>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce6">
            <p>KRÁL MAJÁLESU</p>
            <span className="popis">Chceš být králem nebo královnou celého Majálesu
             a hrdě si nasadit vítěznou korunu? Probojuj se nelehkou a trnitou cestou
              až k majálesovému trůnu a vyhraj skvělé ceny. Přihlašuj se v odkazu.
            </span>
            <span className="poslech">
              PŘIHLÁSIT
            </span>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;