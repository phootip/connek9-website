import React from 'react';
import $ from 'jquery';

import NavbarLogoImage from './assets/logo-without-text.png'

const Navbar = () => (
  <div className="navbar-container" style={{display: 'flex', width: '80vw', justifyContent: 'space-evenly', alignItems: 'center'}}>
      <Link to="#about"> About </Link>
      <Link to="#timetable" className="navbar-long-link"> Time Table </Link>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <NavbarLogo />
        <Link to="#register" className="navbar-register"> Register </Link>
      </div>
      <Link to="#location"> Location </Link>
      <Link to="#faq"> FAQ </Link>
  </div>
)

const Link = ({ to, children, className="" }) => (
  <a href={to} onClick={() => $.scrollify.move(to)} className={"navbar-link " + className}>{children}</a>
)

const NavbarLogo = () => (
  <img className="navbar-logo"
    src={NavbarLogoImage}
    style={{width: '8em', height: '8em'}}
    alt="Connek Logo"
  />   
)

export default Navbar