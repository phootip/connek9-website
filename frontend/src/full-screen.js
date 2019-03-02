import React from 'react';

const FullScreen = ({className = "", children}) => (
  <div className={"fullscreen " + className}>
    {children}
  </div>
)

export default FullScreen;