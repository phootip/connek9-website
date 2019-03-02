import React, { Component } from 'react';
import FullScreen from './full-screen';

class SplashScreen extends Component {
  render() { 
    return (
      <FullScreen sectionName="splash">
        <div className="container" style={{display: 'flex', height: '100%'}}>
          <div className="splash logo container"
            style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
          >
            <Logo />
          </div>
          <div className="splash text container"
            style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
          >
            <h1> DAY MONTH YEAR </h1>
            <h2> CHULALONGKORN UNIVERSITY </h2>
            <button className="register"> Register </button>
          </div>
        </div>
      </FullScreen>
    );
  }
}

const Logo = () => (
  <div className="splash logo"
    style={{backgroundColor: 'pink', borderRadius: '50%', width: '15em', height: '15em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
  >
    <h1> Connek Logo </h1>
  </div>
)

export default SplashScreen;