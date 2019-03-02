import React from 'react';

const FullScreen = ({className = "", children, sectionName}) => (
  <div className={"fullscreen " + className}
    style={{width: '99vw', height: '99vh'}}
    data-section-name={sectionName}
  >
    {children}
  </div>
)

export default FullScreen;