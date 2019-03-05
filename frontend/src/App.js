import React, { Component } from 'react';
import SplashScreen from './splash';
import Sponsors from './sponsors';
import About from './about';
import Navbar from './navbar';
import ReasonsToCome from './reasons-to-come';
import TimeTable from './timetable';
import Location from './location';
import FAQ from './faq';
import FooterSponsors from './footer-sponsors';
import FooterAuthors from './footer-authors';
// import Form from './form';

import $ from 'jquery';
// eslint-disable-next-line
import * as scrollify from 'jquery-scrollify';

import { CSSTransition } from 'react-transition-group';


import Animation from './models/animation'

class App extends Component {
  flags = {
    0: {
      hideNavbar: true
    },
    6: {
      useAlternateFooter: true
    }
  }

  state = {
    index: 0,
    flags: this.flags[0]
  }

  componentDidMount() {
    $.scrollify({
      section: '.fullscreen',
      sectionName: 'section-name',
      before: (index) => this.setState({index, flags: this.flags[index] || {}})
    })
  }

  onSnapScrollIndexChanged = (index) => {
    this.setState({index, flags: this.flags[index] || {}})
  }

  render() {
    const { hideNavbar, useAlternateFooter } = this.state.flags
    return (
      <div className="App" style={{height: '100vh', width: '100vw'}}>
        <div>
          <SplashScreen />
          <About />
          <ReasonsToCome />
          <TimeTable />
          <Location />
          <FAQ />
          {/* <Form /> */}
          <Sponsors />
        </div>


        <div className="navbar">
            <CSSTransition
              in={!hideNavbar}
              appear
              classNames="navbar"
              timeout={400}
              unmountOnExit
              mountOnEnter
            >
              <Navbar />
            </CSSTransition>
        </div>
          {/* <CSSTransition
            in={!useAlternateFooter}
            classNames="footer"
            timeout={400}
          >
            <div className="hide-on-mobile footer">
              <FooterSponsors />
            </div>
          </CSSTransition>
          <CSSTransition
            in={useAlternateFooter}
            classNames="footer"
            timeout={400}
            mountOnEnter
            unmountOnExit
          >
            <div className="hide-on-mobile footer" >
              <FooterAuthors />
            </div>
          </CSSTransition> */}
          <div className="hide-on-mobile footer" >
              <FooterAuthors />
          </div>
          <Animation index={this.state.index}/>
      </div>
    );
  }
}

export default App;
