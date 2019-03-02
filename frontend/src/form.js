import React, { Component } from 'react';
import Iframe from 'react-iframe';
import FullScreen from './full-screen';

class Form extends Component {
  render() {
    return (
      <FullScreen>
        <div className="container" style={{display: 'flex', height: '100%'}}>
          {/* <Iframe src="https://airtable.com/shrZBjD0JF95bg7Lv" width="80%" height="80%"></Iframe> */}
          {/* <Iframe src="http://www.youtube.com/embed/xDMP3i36naA" width="80%" height="80%"></Iframe> */}
          {/* <iframe src="http://www.youtube.com/embed/xDMP3i36naA" width="80%" height="80%"></iframe> */}
          <iframe src="https://airtable.com/shrZBjD0JF95bg7Lv" width="80%" height="80%"></iframe>
        </div>
      </FullScreen>
    )
  }
}

export default Form;