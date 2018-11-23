import React, { Component } from 'react';
import './Vyber.sass';

class Vyber extends Component {
  render() {
    return (
      <div className="Vyber">
        <div className="d-flex bd-highlight razeni">
          <div className="p-2 flex-fill bd-highlight sekce1"><p>Sleduj nás!</p></div>
          <div className="p-2 flex-fill bd-highlight sekce2"><p>Lístek za polovinu</p></div>
        </div>
      </div>
    );
  }
}

export default Vyber;
