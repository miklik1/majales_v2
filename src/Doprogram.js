import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.sass';
import './Lineup.sass';
import './Components/Vyhod/Vyhod.sass';
import Intro3 from './Components/Intro/Intro3';
import demo from './demo.png'
import udg from './udg.png'

class Home extends Component {
  render() {
  return (
    <div className="App">
      <Intro3 />
      <div className="Vyhod">
        <p className="info-line">7. 5. 2019  I   Zlínský lyžařský svah   I   Vstup zdarma</p>
        <p className="kopyto">Dojdi si vyhodit z kopýtka!</p>
        <p className="obyc">Myslíme si, že každý by se měl někdy uvolnit z pracovního stresu a vyhodit si z kopýtka.
              Znáš to, když se násada na sprše promění v mikrofon? Dojdi na Majáles, zahoď všechny 
              zábrany a ukaž všem své pravé já. Abys věděl, že je normální žít život naplno, připravili jsme si rozhovory s několika Zlíňáky.</p>
      </div>
      <div className="d-flex bd-highlight razeni lineup">
          <div className="p-2 flex-fill bd-highlight sekce1 b">
            <p className="kopyto">Mobil CZ</p>
            <p className="kopyto">Stage</p>
            <p className="cas">14.45-15.00</p>
            <p className="interpret">Qočna</p>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce2 h">
            <p className="kopyto">Captain Morgan</p>
            <p className="kopyto">Stage</p>
            <p className="cas">16.00-17.00</p>
            <p className="interpret">Franz Alpa</p>
          </div>
        </div>
        <div className="seznam">
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce1">
            <img className='demo' src={demo} alt='demo' />
            <p>Kapitán Demo</p>
            <span className="popis">Nejtlustší česká celebrita, vizionář a mecenáš přijede se svou Demo Crew oznámit, že je Mládí v trapu. 
              Alternativní rap z jiné dimenze, vlna absurdna, ale v neposlední řadě humor, který ti prodlouží život, když se s ním “svezeš”!
            </span>
            <span className="poslech">
              POSLECH
            </span>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce2">
            <p>UDG</p>
            <img className='udg' src={udg} alt='udg' />
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