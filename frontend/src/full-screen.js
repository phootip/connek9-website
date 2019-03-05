import React from 'react';

const FullScreen = ({className = "", children, sectionName}) => (
  <div className={"fullscreen " + className}
    data-section-name={sectionName}
  >
    {children}
  </div>
)

export default FullScreen;