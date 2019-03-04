import React from 'react';
import FullScreen from './full-screen';

const FAQ = () => (
  <FullScreen sectionName="faq">
    <div className="page-container" style={{display: 'flex', height: '100%', position: 'relative'}}>
      <div className="sub-container"
        style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
      >
      Left Content
      </div>
      <div className="sub-container page-header"
      style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 'auto'}}>
        <h1> FAQ </h1>
      </div>
      <div className="sub-container"
        style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
      >
      Right Content
      </div>
    </div>
  </FullScreen>
)

export default FAQ