import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.sass';
import './Lineup.sass';
import Intro2 from './Components/Intro/Intro2';
import demo from './demo.png'
import udg from './udg.png'
import lvcas from './lvcas.png'
import malalata from './malalata.png'

class Home extends Component {
  render() {
  return (
    <div className="App">
      <Intro2 />
      <div className="d-flex bd-highlight razeni lineup">
          <div className="p-2 flex-fill bd-highlight sekce1 b">
            <p className="kopyto">Mobil CZ</p>
            <p className="kopyto">Stage</p>
            <p className="cas">14.45-15.00</p>
            <p className="interpret">Qočna</p>
            <p className="cas">15.00-16.00</p>
            <p className="interpret">Like it</p>
            <p className="cas">18.00-19.00</p>
            <p className="interpret">Cirkus Problem</p>
            <p className="cas">20.00-21.00</p>
            <p className="interpret">Kapitán Demo</p>
            <p className="cas">22.00-23.00</p>
            <p className="interpret">Lvcas Dope</p>
            <p className="cas">23.00-0.00</p>
            <p className="interpret">Malalata</p>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce2 h">
            <p className="kopyto">Captain Morgan</p>
            <p className="kopyto">Stage</p>
            <p className="cas">16.00-17.00</p>
            <p className="interpret">Franz Alpa</p>
            <p className="cas">17.00-18.00</p>
            <p className="interpret">Glad For Today</p>
            <p className="cas">19.00-20.00</p>
            <p className="interpret">John Wolfhooker</p>
            <p className="cas">21.00-22.00</p>
            <p className="interpret">UDG</p>
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
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce3">
            <img className='lvcas' src={lvcas} alt='lvcas' />
            <p>LVCAS  DOPE</p>
            <span className="popis">Vyšlá hvězda české rapové scény, člen labelu Milion+, jehož vliv podmanil tisíce fans, 
            nejen díky jeho spolupráci s Pauliem Garandem, DJ Wichem či Rytmusem. Jeho totálně dope show uslyšíme i na našem Majálesu.
            </span>
            <span className="poslech">
              POSLECH
            </span>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce4">
            <p>MALALATA</p>
            <img className='malalata' src={malalata} alt='malalata' />
            <span className="popis">Nejtlustší česká celebrita, vizionář a mecenáš přijede se svou Demo Crew oznámit, že je Mládí v trapu. 
              Alternativní rap z jiné dimenze, vlna absurdna, ale v neposlední řadě humor, který ti prodlouží život, když se s ním “svezeš”!
            </span>
            <span className="poslech">
              POSLECH
            </span>
          </div>
        </div>
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