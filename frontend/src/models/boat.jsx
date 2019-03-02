import React, { Component } from 'react';
import '../css/boat.scss'
// import ship from 

class Boat extends Component {
  render() {
    return (
      <div className={`boat-anime ${this.props.className}`}>
        <img className="boat" src={process.env.PUBLIC_URL + '/image2vector.svg'}/>
      </div>
    )
    
  }
}

export default Boat;