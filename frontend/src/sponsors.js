import React from 'react';
import FullScreen from './full-screen'

const Sponsors = () => (
  <FullScreen sectionName="sponsors">
    <div className="sponsors"
    style={{display: 'flex', flexDirection: 'column', paddingTop: '10em'}}
    >
      <h1 style={{alignSelf: 'center', textAlign: 'center', margin: 0, transform: 'translateX(10%)'}} className="header-text"> Sponsors </h1>
      <SponsorsList />
    </div>
  </FullScreen>
)

const SponsorsList = () => (
  <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
    <SponsorIcon color="red" />
    <SponsorIcon color="green" />
    <SponsorIcon color="blue" />
    <SponsorIcon color="orange" />
    <SponsorIcon color="cyan" />
    <SponsorIcon color="lime" />
    <SponsorIcon color="purple" />
    <SponsorIcon color="gray" />
  </div>
)

const SponsorIcon = ({ color }) => (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3em'}}>
    <div style={{width: '5em', height: '5em', backgroundColor: color}}>
    </div>
    <span> Name </span>
    <span> Gave money </span>
  </div>
)
 
export default Sponsors;