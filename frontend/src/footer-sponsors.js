import React from 'react';
import Link from './link';

const Sponsors = () => (
  <>
  <Link to="#sponsors" className="author-link">
    Sponsors:
  </Link>
  <div style={{display: 'inline-flex', flexDirection: 'row', justifyContent: 'space-evenly', flexGrow: '1'}}>
    <PlaceHolderLogo color="red"/>
    <PlaceHolderLogo color="cyan"/>
    <PlaceHolderLogo color="lime"/>
    <PlaceHolderLogo color="orange"/>
    <PlaceHolderLogo color="yellow"/>
    <PlaceHolderLogo color="gray"/>
    <PlaceHolderLogo color="black"/>
    <PlaceHolderLogo color="blue"/>
  </div>
  </>
)

const PlaceHolderLogo = ({ color, text }) => (
  <div style={{width: '5em', height: '5em', backgroundColor: color}}>
    {text}
  </div>
)

export default Sponsors