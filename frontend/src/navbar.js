import React from 'react';
import $ from 'jquery';

import NavbarLogoImage from './assets/logo-without-text.png'
import { FORM_LINK } from './constants';

const Navbar = () => (
  <div className="navbar-container" style={{display: 'flex', width: '80vw', justifyContent: 'space-evenly', alignItems: 'center'}}>
      <Link to="#about"> About </Link>
      <Link to="#timetable" className="navbar-long-link"> Time Table </Link>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Link to="#splash">
          <NavbarLogo />
        </Link>
        <a href={FORM_LINK} rel="noopener noreferrer" target="_blank" className="navbar-register"> Register </a>
      </div>
      <Link to="#location"> Location </Link>
      <Link to="#faq"> FAQ </Link>
  </div>
)

const Link = ({ to, children, className="" }) => (
  <a href={to} onClick={() => $.scrollify.move(to)} className={"navbar-link " + className}>{children}</a>
)

const NavbarLogo = () => (
  <img className="hide-on-mobile navbar-logo"
    src={NavbarLogoImage}
    style={{width: '6em', height: '6em'}}
    alt="Connek Logo"
  />   
)

export default Navbar