import React from 'react';
import FullScreen from './full-screen';
import Map from './models/google-map';
import './css/map.scss'

const Location = () => (
  <FullScreen sectionName="location">
    <div className="page-container" style={{display: 'flex'}}>
      <div className="sub-container"
        style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3em'}}
      >
        <div className="animatedParent animateOnce text-container">
          <p className="animated fadeInRight content-text add-padding-mobile">
            ลานเกียร์​ คณะวิศวกรรมศาสตร์​ จุฬาลงกรณ์มหาวิทยาลัย
          </p>
          <div className="mobile-only animated fadeInRight">
            <a className="content-text" href="https://goo.gl/maps/TnZ7NYwx3aQ2">View on Google Maps</a>
          </div>
        </div>
        <div className="hide-on-mobile">
          <Map></Map>
        </div>
      </div>
      <div className="sub-container page-header"
        style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
      >
        <div className="header-text">
          <h1> Location </h1>
        </div>
      </div>
    </div>
  </FullScreen>
)


export default Location;