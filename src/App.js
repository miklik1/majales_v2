import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import Lineup from './Lineup';
import Doprogram from './Doprogram';
import Soutez from './Soutez';
import About from './About';
import ScrollToTop from './ScrollToTop';
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
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';


class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    var sirka = document.documentElement.clientWidth;
    var x = document.getElementById("burgr");
    if (window.matchMedia("(max-width: 768px)").matches) {
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
}
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop>
      <div className="Header">
         <Navbar color="light" light expand="md">
          <NavbarBrand  id="burgr" href="/"><img className="logo" src={logo} alt='logo' /></NavbarBrand>
          <span style={{color: 'white'}}>o</span>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="borderCenter textZoom" onClick={this.toggle}><Link to="/">Domu</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="borderCenter textZoom" onClick={this.toggle}><Link to="/Lineup">Line-up</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="borderCenter textZoom" onClick={this.toggle}><Link to="/Doprogram">Doprovodný program</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="borderCenter textZoom" onClick={this.toggle}><Link to="/Cisty">Čistý festival</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="borderCenter textZoom" onClick={this.toggle}><Link to="/Onas">O nás</Link></NavLink>
              </NavItem>
              <NavItem className="center">
                <div className="icons">
                  <a href="https://www.facebook.com/MajalesUTB/" onClick={this.toggle} target="_blank"><img className='fb textZoom' src={fb} alt='fb' /></a>
                  <a href="https://www.instagram.com/majalesutb/" onClick={this.toggle} target="_blank"><img className='ig textZoom' src={ig} alt='ig' /></a>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <Route render={({location}) => (
              <TransitionGroup>
        <CSSTransition
                key={location.key}
                timeout={1000}
                classNames="item"
        >
          <Switch location={location}>
            <Route path="/" exact component={Home} />
            <Route path="/Lineup" component={Lineup} />
            <Route path="/Doprogram" component={Doprogram} />
            <Route path="/Cisty" component={Soutez} />
            <Route path="/Onas" component={About} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      )} />
      </ScrollToTop>
    </Router>


    );
  }
}

export default Header;