import React, { Component } from 'react';
import FullScreen from './full-screen';

import LogoImage from './assets/logo-text-pink.png';

import { FORM_LINK } from './constants'

class SplashScreen extends Component {
  render() { 
    return (
      <FullScreen sectionName="splash">
        <div className="page-container" style={{display: 'flex', height: '100%'}}>
          <div className="sub-container"
            style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
          >
            <Logo />
          </div>
          <div className="sub-container"
            style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
          >
            <h1> 7<sup>th</sup> APRIL 2019 </h1>
            <h2> @ Chulalongkorn University </h2>
            <a className="register-button" href={FORM_LINK} rel="noopener noreferrer" target="_blank"> Register Now </a>
          </div>
        </div>
      </FullScreen>
    );
  }
}

const Logo = () => (
  <img className="splash-logo"
    alt="Connek Logo"
    src={LogoImage}
    style={{width: '40em', height: '40em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
  />
)

export default SplashScreen;