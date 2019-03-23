import React, { Component } from 'react';
import './Vyhod.sass';

class Vyhod extends Component {
  render() {
    return (
      <div className="Vyhod">
      	<p className="info-line">7. 5. 2019  I   Zlínský lyžařský svah   I   Vstup zdarma</p>
        <p className="kopyto">Dojdi si vyhodit z kopýtka!</p>
        <p className="obyc">Myslíme si, že každý by se měl někdy uvolnit z pracovního stresu a vyhodit si z kopýtka.
							Znáš to, když se násada na sprše promění v mikrofon? Dojdi na Majáles, zahoď všechny 
							zábrany a ukaž všem své pravé já. Abys věděl, že je normální žít život naplno, připravili jsme si rozhovory s několika Zlíňáky.</p>
      </div>
    );
  }
}

export default Vyhod;
