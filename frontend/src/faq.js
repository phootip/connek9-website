import React from 'react';
import FullScreen from './full-screen';

const FAQ = () => (
  <FullScreen sectionName="faq">
    <div className="container" style={{display: 'flex', height: '100%', position: 'relative'}}>
      <div className="faq left container"
        style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
      >
      Left Content
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <h1> FAQ </h1>
      </div>
      <div className="faq right container"
        style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
      >
      Right Content
      </div>
    </div>
  </FullScreen>
)

export default FAQ