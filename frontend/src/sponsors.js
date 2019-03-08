import React from 'react';
import FullScreen from './full-screen'
import Yannix from './assets/yannix.png'
import Sunday from './assets/sunday.png'

const Sponsors = () => (
  <FullScreen sectionName="sponsors">
    <div className="sponsors"
    style={{display: 'flex', flexDirection: 'column', width: '100%'}}
    >
      <h1 style={{alignSelf: 'center', textAlign: 'center', margin: 0, transform: 'translateX(10%)'}} className="header-text"> Sponsors </h1>
      <SponsorsList />
      <div className="mobile-only" style={{paddingBottom: '4em', textAlign: 'center'}}>
        Website designed by Athipat Nampetch
        <br/>
        Made by @peawyoyoyin, @maxminor, @phootip
      </div>
    </div>
  </FullScreen>
)

const SponsorsList = () => (
  <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',alignItems:'stretch'}}>
    <SponsorIcon src={Yannix} name="Yannix" size="L"/>
    <SponsorIcon src={Sunday} name="Sunday" size="M"/>
  </div>
)

const SponsorIcon = ({ src, name, size }) => {
  let w = '60vw'
  if(size === 'L') w='90vw'
  else if(size === 'M') w='70vw'
  return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',alignItems: 'center', flex: 1}}>
      <img src={src} style={{width: w,height:'auto', maxHeight:'auto', maxWidth:'500px'}} alt={name}/>
      <span> {name} </span>
    </div>
  )
}
 
export default Sponsors;