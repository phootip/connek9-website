import React from 'react';

const Sponsors = () => (
  <>
  Sponsored by:
  <div style={{display: 'inline-flex', flexDirection: 'row', justifyContent: 'space-evenly', flexGrow: '1'}}>
    <PlaceHolderLogo color="red"/>
    <PlaceHolderLogo color="cyan"/>
    <PlaceHolderLogo color="lime"/>
    <PlaceHolderLogo color="orange"/>
    <PlaceHolderLogo color="yellow"/>
  </div>
  </>
)

const PlaceHolderLogo = ({ color, text }) => (
  <div style={{width: '2em', height: '2em', backgroundColor: color}}>
    {text}
  </div>
)

export default Sponsors