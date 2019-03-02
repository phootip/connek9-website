import React from 'react';

const Navbar = () => (
  <div className="navbar container" style={{display: 'flex', width: '80vw', justifyContent: 'space-evenly', alignItems: 'center'}}>
      <a href="#about"> About </a>
      <a href="#timetable"> Time Table </a>
      <NavbarLogo />
      <a href="#location"> Location </a>
      <a href="#faq"> FAQ </a>
  </div>
)

const NavbarLogo = () => (
  <div className="navbar logo" style={{borderRadius: '50%', backgroundColor: 'pink', width: '5em', height: '5em'}}>
  </div>
)

export default Navbar