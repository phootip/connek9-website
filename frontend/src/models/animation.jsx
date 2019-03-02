import React, { Component } from 'react';
import Boat from './boat';
import Wave from './wave';
import '../css/transition.scss'

class Animation extends Component {
  state = {
    moveLeft: false
  }

  move = () => {
    this.setState({moveLeft:!this.state.moveLeft})
  }

  render() {
    let classes = []
    if(this.state.moveLeft) classes.push('moveLeft')

    return (
      // <div>
      <div>
        <button style={{position: "fixed", top:'50%'}} onClick={this.move}> click me!! </button>
        <Boat className={classes.join(' ')}/>
        <Wave className={classes.join(' ')}/>
      </div>
    );
  }
}

export default Animation;