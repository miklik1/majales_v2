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
            <p>STAROBRNO SOUTĚŽ KAPEL - 27. 4.</p>
            <span className="popis">Věčná majálesová sláva, roční zásoba piva Starobrno
             a možnost zahrát si před zlínskou veřejností - to čeká vítěze souboje kapel.
            </span>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce2">
            <p>ČISTÝ FESTIVAL</p>
            <span className="popis">Čistý festival zajišťuje od roku 2008 třídění odpadů na českých
             hudebních festivalech. Najdi barevné koše nebo náš stánek, třiď odpady a získej recyklované odměny.
            </span>
          </div>
        </div>
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce3">
            <p>SILENT DISCO - 30. 4.</p>
            <span className="popis">Takovou párty Zlín ještě neslyšel, aneb nejtišší kalba na střeše jednadvacítky. 
            To by Baťa koukal! Pro více info sleduj fb událost.
            </span>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce4">
            <p>WARM UP - 30. 4.</p>
            <span className="popis">Tato zahřívačka pro všechny nedočkavce, kterým už skáčou kopýtka před Majálesem. 
            </span>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;