import React from 'react';
import FullScreen from './full-screen'
import Yannix from './assets/yannix.png'
import Sunday from './assets/sunday.png'

import AuthorLink from './author-link'
import { AUTHORS } from './constants'

const Sponsors = () => (
  <FullScreen sectionName="sponsors">
    <div className="sponsors"
    style={{display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100%', justifyContent: 'space-evenly'}}
    >
      <h1 style={{alignSelf: 'center', textAlign: 'center', margin: 0, transform: 'translateX(10%)'}} className="header-text"> Sponsors </h1>
      <SponsorsList />
      <div className="mobile-only" style={{alignSelf: 'flex-end', paddingBottom: '4em', textAlign: 'center'}}>
        Website designed by <AuthorLink author={AUTHORS.nott} style={{color: 'black'}}/>
        <br/>
        Made by 
        <AuthorLink author={AUTHORS.peaw} style={{color: 'black'}}/>,
        <AuthorLink author={AUTHORS.tun} style={{color: 'black'}}/>,
        <AuthorLink author={AUTHORS.phootip} style={{color: 'black'}}/>
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
  let w;
  switch(size) {
    case 'L': w = '90vw'; break;
    case 'M': w = '30vw'; break;
    default: w = '10vw'; break;
  }
  return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',alignItems: 'center', flex: 1}}>
      <img src={src} style={{width: w,height:'auto', maxHeight:'auto', maxWidth:'100vw'}} alt={name}/>
      <span> {name} </span>
    </div>
  )
}
 
export default Sponsors;