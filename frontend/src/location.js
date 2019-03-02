import React from 'react';
import FullScreen from './full-screen';

const Location = () => (
  <FullScreen>
    <div className="container" style={{display: 'flex', height: '100%'}}>
      <div className="about text container"
        style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2em'}}
      >
        Here, there, everywhere, somewhere, nowhere
      </div>
      <div className="about header container"
        style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
      >
        <div className="splash logo">
          <h1> Location </h1>
        </div>
      </div>
    </div>
  </FullScreen>
)


export default Location;