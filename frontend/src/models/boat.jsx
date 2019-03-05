import React, { Component } from 'react';
import '../css/boat.scss'
import BoatImage from '../assets/boat.svg'
// import ship from 

class Boat extends Component {
  render() {
    return (
      <div className={`boat-anime ${this.props.className}`}>
        <img className="boat" src={BoatImage} alt="pirate ship"/>
      </div>
    )
    
  }
}

export default Boat;