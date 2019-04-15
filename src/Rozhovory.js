import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.sass';
import './Lineup.sass';
import './Rozhovory.sass';
import './Components/Vyhod/Vyhod.sass';
import './Doprogram.sass';
import demo from './demo.png'
import udg from './udg.png'
import shoes from './Components/Vyber/shoes2.svg';

class Home extends Component {
  render() {
  return (
    <div className="App">
      <div className="Vyber">
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce2">
            <p>ROZHOVORY S OSOBNOSTMI</p>
            <img className='shoes' src={shoes} alt='shoes' />
          </div>
        </div>
      </div>
      <div className="Vyhod">
        <p className="kopyto">Jak si vyhazují z kopýtka?</p>
        <p className="obyc">Myslíme si, že každý by se měl někdy uvolnit z pracovního stresu a vyhodit si z kopýtka.
Znáš to, když se násada na sprše promění v mikrofon? Dojdi na Majáles, zahoď všechny 
zábrany a ukaž všem své pravé já. Abys věděl, že je normální žít život naplno, připravili jsme si rozhovory s několika Zlíňáky.</p>
      </div>
      <div className="seznam">
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce1">
          </div>
          <div className="p-2 flex-fill bd-highlight sekce2">
          </div>
        </div>
                <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce3">
          </div>
          <div className="p-2 flex-fill bd-highlight sekce4">
          </div>
        </div>
        </div>
    </div>
    );
  }
}

export default Home;