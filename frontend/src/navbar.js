import React from 'react';

import Link from './link';
import NavbarLogoImage from './assets/logo-without-text.png'
import { FORM_LINK } from './constants';

const Navbar = () => (
  <div className="navbar-container" style={{display: 'flex', width: '80vw', justifyContent: 'space-evenly', alignItems: 'center'}}>
      <Link to="#about" className="navbar-link"> About </Link>
      <Link to="#timetable" className="navbar-link navbar-long-link"> Time Table </Link>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Link to="#splash" className="navbar-link">
          <NavbarLogo />
        </Link>
        <a href={FORM_LINK} rel="noopener noreferrer" target="_blank" className="navbar-register"> Register </a>
      </div>
      <Link to="#location" className="navbar-link"> Location </Link>
      <Link to="#faq" className="navbar-link"> FAQ </Link>
  </div>
)
const NavbarLogo = () => (
  <img className="navbar-logo"
    src={NavbarLogoImage}
    alt="Connek Logo"
  />   
)

export default Navbar