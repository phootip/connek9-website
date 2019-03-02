import React from 'react';
import $ from 'jquery';

const Navbar = () => (
  <div className="navbar container" style={{display: 'flex', width: '80vw', justifyContent: 'space-evenly', alignItems: 'center'}}>
      <Link to="#about"> About </Link>
      <Link to="#timetable"> Time Table </Link>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <NavbarLogo />
        <Link to="#register"> Register </Link>
      </div>
      <Link to="#location"> Location </Link>
      <Link to="#faq"> FAQ </Link>
  </div>
)

const Link = ({ to, children, className="" }) => (
  <a href={to} onClick={() => $.scrollify.move(to)} className={"navbar-link " + className}>{children}</a>
)

const NavbarLogo = () => (
  <div className="navbar-logo"
    style={{borderRadius: '50%', backgroundColor: 'pink', width: '8em', height: '8em', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    Logo
  </div>
)

export default Navbar