import React from 'react';

const FullScreen = ({className = "", children}) => (
  <div className={"fullscreen " + className}
    style={{width: '99vw', height: '98vh'}}
  >
    {children}
  </div>
)

export default FullScreen;