import React, { Component } from 'react';
import Boat from './boat';
import Wave from './wave';
import '../css/transition.scss'

class Animation extends Component {
  render() {
    let classes = []
    if(this.props.index === 1 || this.props.index === 2) classes.push('moveLeft')
    if(this.props.index === 3 || this.props.index === 4) classes.push('moveRight')
    return (
      <div>
        <Boat className={classes.join(' ')}/>
        <Wave className={classes.join(' ')}/>
      </div>
    );
  }
}

export default Animation;