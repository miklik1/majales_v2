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
            <span className="popis">Nejtlustší česká celebrita, vizionář a mecenáš přijede se svou Demo Crew oznámit, že je Mládí v trapu. 
              Alternativní rap z jiné dimenze, vlna absurdna, ale v neposlední řadě humor, který ti prodlouží život, když se s ním “svezeš”!
            </span>
            <span className="poslech">
              POSLECH
            </span>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce2">
            <p>Kino</p>
            <span className="popis">Nejtlustší česká celebrita, vizionář a mecenáš přijede se svou Demo Crew oznámit, že je Mládí v trapu. 
              Alternativní rap z jiné dimenze, vlna absurdna, ale v neposlední řadě humor, který ti prodlouží život, když se s ním “svezeš”!
            </span>
            <span className="poslech">
              POSLECH
            </span>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;