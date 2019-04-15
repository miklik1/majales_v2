import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.sass';
import './Lineup.sass';
import Intro2 from './Components/Intro/Intro2';
import demo from './demo.png'
import udg from './udg.png'
import lvcas from './lvcas.png'
import malalata from './malalata.png'
import circus from './circus.png'
import john from './john.png'
import glad from './glad.png'
import like from './like.png'
import franc from './franc.png'

class Home extends Component {
  render() {
  return (
    <div className="App">
      <Intro2 />
      <div className="d-flex bd-highlight razeni lineup">
          <div className="p-2 flex-fill bd-highlight sekce1 b">
            <p className="kopyto">Mobil CZ</p>
            <p className="kopyto">Stage</p>
            <p className="cas">13.45-14.00</p>
            <p className="interpret">Qočna</p>
            <p className="cas">15.00-16.00</p>
            <p className="interpret">Franz Alpa</p>
            <p className="cas">17.00-18.00</p>
            <p className="interpret">Lvcas Dope</p>
            <p className="cas">19.00-20.00</p>
            <p className="interpret">UDG</p>
            <p className="cas">21.00-22.00</p>
            <p className="interpret">Cirkus Problem</p>
            <p className="cas">23.00-0.00</p>
            <p className="interpret">Malalata</p>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce2 h">
            <p className="kopyto">Captain Morgan</p>
            <p className="kopyto">Stage</p>
            <p className="cas">14.00-15.00</p>
            <p className="interpret">Like it</p>
            <p className="cas">16.00-17.00</p>
            <p className="interpret">Glad For Today</p>
            <p className="cas">18.00-19.00</p>
            <p className="interpret">John Wolfhooker</p>
            <p className="cas">20.00-21.00</p>
            <p className="interpret">Kapitán Demo</p>
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
          </div>
          <div className="p-2 flex-fill bd-highlight sekce2">
            <p>UDG</p>
            <img className='udg' src={udg} alt='udg' />
            <span className="popis">Šestičlenná pop-rocková banda z Ústí, která svými hity Hvězdář nebo Kurtizána baví
             lidi napříč generacemi i festivaly po celé republice. Na pódiu je jich vždycky plno a v textech odráží snad všechny dostupné emoce. 
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
          </div>
          <div className="p-2 flex-fill bd-highlight sekce4">
            <p>MALALATA</p>
            <img className='malalata' src={malalata} alt='malalata' />
            <span className="popis">Dýdžejské duo, které vyprodává kluby v Česku i na Slovensku svým projektem Balkan Bashavel. 
            Jistotou je, že budou mít chlapci proužkované trička a že vás svou energickou hudbou rozhodně nenechají stát v klidu na místě. 
            </span>
          </div>
        </div>
                <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce5">
            <img className='circus' src={circus} alt='circus' />
            <p>CIRCUS PROBLEM</p>
            <span className="popis">Příval obrovské energie již od prvního tónu díky kombinaci prvků disco, balkánské dechovky
             a pouličního muzicírování předvede tato šestičlenná bandička, mezi jejichž nástroje patří tuba, trombon nebo klarinet. To bude cirkus!
            </span>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce6">
            <p>JOHN WOLFHOOKER</p>
            <img className='john' src={john} alt='john' />
            <span className="popis">Čtyři šílenci, jejichž cílem je zachránit rock’n’roll. Před dvěma lety nám na Majálesu ukázali, 
            že se jim to daří a to sakra dobře. Od té doby ušli obrovskou cestu koncertování po republice a vrací se k nám, aby vás opět dostali do varu.
            </span>
          </div>
        </div>
                <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce7">
            <img className='glad' src={glad} alt='glad' />
            <p>GLAD FORTODay</p>
            <span className="popis">Hradecká parta, která přinese post-hardcorovou nálož tvrdé muziky. 
            Řízné kytary v kombinaci s částečným screamem, to je něco pro opravdové fajnšmekry tvrdší hudby.
            </span>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce8">
            <p>LIKE-IT</p>
            <img className='like' src={like} alt='like' />
            <span className="popis">Mladá pop-rocková kapela z Vysočiny, kterou vystřelil do éteru českých rádií jejich singl Nádech. 
            Odjeli si turné s kapelou Chinaski, nebo Sebastian a k nám se svými chytlavými melodiemi míří taky.
            </span>
          </div>
        </div>
                <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce9">
            <img className='franc' src={franc} alt='franc' />
            <p>FRANC ALPA</p>
            <span className="popis">Tak trochu rock’n’roll, tak trochu punk. Tyto zlínské bardy možná znáte z divadla, 
            možná z ulice, možná z hospody. Každopádně, jak o sobě sami píšou, předvedou “lidový nátěr k masážím a do koupele”, tak se přijďte “namazat”.
            </span>
          </div>
          <div className="p-2 flex-fill bd-highlight sekce10">
            <p>QOČNA</p>
            <span className="popis">Náš nekompromisní headliner, který v hudebním světě nemá obdoby. 
            Děti z univerzitní školky Qočna každoročně odpálí takovou show, že každy ledovec pod náložem 
            roztomilosti roztává a poťouchle se usmívá. 
            </span>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;