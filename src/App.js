import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Lineup from './Lineup';
import Doprogram from './Doprogram';
import Soutez from './Soutez';
import './Components/Header/Header.sass';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
import logo from './Components/Header/logo.svg';
import fb from './Components/Header/fb.svg';
import ig from './Components/Header/ig.svg';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    var x = document.getElementById("burgr");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Router>
      <div className="Header">
         <Navbar color="light" light expand="md">
          <NavbarBrand  id="burgr" href="/"><img className="logo" src={logo} alt='logo' /></NavbarBrand>
          <span style={{color: 'white'}}>o</span>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="active borderCenter" onClick={this.toggle}><Link to="/">Domu</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="borderCenter" onClick={this.toggle}><Link to="/Lineup">Line-up</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="borderCenter" onClick={this.toggle}><Link to="/Doprogram">Doprovodný program</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="borderCenter" onClick={this.toggle}><Link to="/Soutez">Soutěž kapel</Link></NavLink>
              </NavItem>
              <NavItem className="borderCenter">
                <NavLink className="borderCenter" onClick={this.toggle}>Rozhovory</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="borderCenter" onClick={this.toggle}>O nás</NavLink>
              </NavItem>
              <NavItem className="center">
                <div className="icons">
                  <a href="https://www.facebook.com/MajalesUTB/" onClick={this.toggle} target="_blank"><img className='fb' src={fb} alt='fb' /></a>
                  <a href="https://www.instagram.com/majalesutb/" onClick={this.toggle} target="_blank"><img className='ig' src={ig} alt='ig' /></a>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      <Route path="/" exact component={Home} />
      <Route path="/Lineup" component={Lineup} />
      <Route path="/Doprogram" component={Doprogram} />
      <Route path="/Soutez" component={Soutez} />

    </Router>
    );
  }
}

export default Header;