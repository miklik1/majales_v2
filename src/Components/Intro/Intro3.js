import React, { Component } from 'react';
import '../Vyber/Vyber.sass';
import bricks from '../../bricks.png';

class Intro3 extends Component {
  render() {
    return (
      <div className="Vyber">
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce2">
            <p>doprovod</p>
            <img className='bricksBG' src={bricks} alt='bricks' />
          </div>
        </div>
      </div>
    );
  }
}

export default Intro3;
