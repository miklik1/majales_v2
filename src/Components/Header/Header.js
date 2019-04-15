import React, { Component } from 'react';
import './Header.sass';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
import logo from './logo.svg';
import fb from './fb.svg';
import ig from './ig.svg';

class Header extends Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="Header">
         <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img className="logo" src={logo} alt='logo' /></NavbarBrand>
          <span style={{color: 'white'}}>o</span>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/" className="active borderCenter">Domů</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="../Intro/Intro/Intro/Intro" className="borderCenter">Line up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap" className="borderCenter">Doprovodný program</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap" className="borderCenter">Soutěž kapel</NavLink>
              </NavItem>
              <NavItem className="borderCenter">
                <NavLink href="https://github.com/reactstrap/reactstrap" className="borderCenter">Rozhovory</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap" className="borderCenter">O nás</NavLink>
              </NavItem>
              <NavItem className="center">
                <div className="icons">
                  <img className='fb' src={fb} alt='fb' />
                  <img className='ig' src={ig} alt='ig' />
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
