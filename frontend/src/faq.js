import React from 'react';
import FullScreen from './full-screen';

import { FAQs } from './constants';

const FAQItem = ({ faq }) => (
  <div style={{textAlign: 'center'}}>
    <h1 class="content-text"> {faq.question} </h1>
    <p class="content-text"> {faq.answer} </p>
  </div>
)

const FAQ = () => (
  <FullScreen sectionName="faq">
    <div className="page-container" style={{display: 'flex', height: '100%', position: 'relative'}}>
      <div className="sub-container"
        style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
      >
       <FAQItem faq={FAQs[0]} />
      </div>
      <div className="sub-container page-header"
      style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 'auto'}}>
        <h1 className="header-text"> FAQ </h1>
      </div>
      <div className="sub-container"
        style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
      >
        <FAQItem faq={FAQs[1]} />
      </div>
    </div>
  </FullScreen>
)

export default FAQ