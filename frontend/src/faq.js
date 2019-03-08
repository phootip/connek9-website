import React from 'react';
import FullScreen from './full-screen';

import { FAQs } from './constants';

const FAQItem = ({ faq }) => (
  <div className="add-padding-mobile" style={{textAlign: 'center'}}>
    <h1 className="content-text faq-header" style={{color:'black'}}> {faq.question} </h1>
    <p className="content-text faq-text add-padding-mobile"> {faq.answer} </p>
  </div>
)

const FAQ = () => (
  <FullScreen className="faq-page" sectionName="faq">
    <div className="page-container" style={{display: 'flex'}}>
      <div className="sub-container faq-container"
        style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
      >
       <FAQItem faq={FAQs[0]} />
       <FAQItem faq={FAQs[2]} />
      </div>
      <div className="sub-container page-header"
      style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 'auto'}}>
        <h1 className="header-text"> FAQ </h1>
      </div>
      <div className="sub-container faq-container"
        style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
      >
        <FAQItem faq={FAQs[1]} />
        <FAQItem faq={FAQs[3]} />
      </div>
    </div>
  </FullScreen>
)

export default FAQ