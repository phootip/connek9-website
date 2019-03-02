import React, { Component } from 'react';
import FullScreen from './full-screen';

class SplashScreen extends Component {
  render() { 
    return (
      <FullScreen>
        <div className="container" style={{display: 'flex', height: '100%'}}>
          <div className="splash logo container"
            style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
          >
            <div className="splash logo">
              <h1> Connek Logo </h1>
            </div>
          </div>
          <div className="splash text container"
            style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
          >
            <h1> DAY MONTH YEAR </h1>
            <h2> CHULALONGKORN UNIVERSITY </h2>
            <button> Register </button>
          </div>
        </div>
      </FullScreen>
    );
  }
}
 
export default SplashScreen;