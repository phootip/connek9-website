import React from 'react';
import FullScreen from './full-screen';
import Map from './models/google-map';
import './css/map.scss'

const Location = () => (
  <FullScreen sectionName="location">
    <div className="container" style={{display: 'flex', height: '100%'}}>
      <div className="about text container"
        style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2em'}}
      >
        <Map></Map>
      </div>
      <div className="about header container"
        style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
      >
        <div className="splash logo header-text">
          <h1> Location </h1>
        </div>
      </div>
    </div>
  </FullScreen>
)


export default Location;