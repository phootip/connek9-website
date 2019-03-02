import React, { Component } from 'react';
import SnapScroll from 'react-snap-scroll';
import SplashScreen from './splash';
import Sponsors from './sponsors';
import About from './about';
import Navbar from './navbar';
import ReasonsToCome from './reasons-to-come';
import TimeTable from './timetable';
import Location from './location';
import FAQ from './faq';
import FooterSponsors from './footer-sponsors';

import { CSSTransition } from 'react-transition-group';


import Animation from './models/animation'

class App extends Component {
  flags = {
    0: {
      hideNavbar: true
    },
    7: {
      useAlternateFooter: true
    }
  }

  state = {
    index: 0,
    flags: this.flags[0]
  }


  onSnapScrollIndexChanged = (index) => {
    this.setState({index, flags: this.flags[index] || {}})
  }

  render() {
    const { hideNavbar } = this.state.flags
    return (
      <div className="App" style={{height: '100vh', width: '100vw'}}>
        <SnapScroll indexChanged={this.onSnapScrollIndexChanged}>
          <SplashScreen />
          <About />
          <ReasonsToCome />
          <TimeTable />
          <Location />
          <FAQ />
          <Sponsors />
        </SnapScroll>


        <div style={{position: 'absolute', top: '0px', left: '0px', right: '0px', display: 'flex', justifyContent: 'center'}}>
            <CSSTransition
              in={!hideNavbar}
              appear
              classNames="navbar"
              timeout={800}
              unmountOnExit
              mountOnEnter
            >
              <Navbar />
            </CSSTransition>
        </div>
        <div style={{position: 'absolute', bottom: '0px', left: '0px', right: '0px', display: 'flex', alignItems: 'flex-end'}}>
          <FooterSponsors />
        </div>
        <Animation/>
      </div>
    );
  }
}

export default App;
