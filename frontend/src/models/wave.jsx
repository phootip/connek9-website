import React, { Component } from 'react';
import '../css/wave.css'

class Wave extends Component {
  render() {
    return (
      <div className={`ocean`}>
        <div className={`wave ${this.props.className}`}></div>
        {/* <div className={`wave ${this.props.className}`}></div> */}
      </div>
    )
  }
}

export default Wave;