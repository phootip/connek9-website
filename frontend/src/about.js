import React from 'react';
import FullScreen from './full-screen';

const About = () => (
  <FullScreen sectionName="about">
    <div className="container" style={{display: 'flex', height: '100%'}}>
      <div className="about header container"
        // style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
        style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
      >
        <div className="splash logo header-text">
          <h1> What is Connek? </h1>
        </div>
      </div>
      {/* <div className="about text container" */}
      <div className="about text container"
        style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2em'}}
      >
        <div className='animatedParent animateOnce'>
          <p className="animated bounceInRight content-text">
            งาน ConneK เป็นงานที่จัดขึ้นของนิสิตภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัยและมหาวิทยาลัยเกษตรศาสตร์ 
            ภายในงานจะมีกิจกรรมที่ให้นิสิตของทั้งสองมหาวิทยาลัยทำร่วมกัน โดยมีจุดมุ่งหมายเพื่อสานสัมพันธ์ระหว่างนิสิตของ 2 มหาวิทยาลัย
          </p>
        </div>
      </div>
    </div>
  </FullScreen>
)

export default About;