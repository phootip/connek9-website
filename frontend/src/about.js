import React from 'react';
import FullScreen from './full-screen';

const About = () => (
  <FullScreen sectionName="about">
    <div className="page-container" style={{display: 'flex'}}>
      <div className="sub-container page-header"
        // style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
        style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
      >
        <div className="animatedParent animateOnce">
          <div className="splash logo animated fadeInUpShort header-text">
            <h1> What is Connek? </h1>
          </div>
        </div>
      </div>
      {/* <div className="about text container" */}
      <div className="sub-container text-container"
        style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
      >
<<<<<<< HEAD
        <div className='animatedParent animateOnce add-padding-mobile'>
          <p className="animated fadeInRight content-text">
=======
        {/* <div className='animatedParent animateOnce'> */}
        <div className='animatedParent animateOnce'>
          <p className="animated fadeInRight content-text" style={{padding:'2em'}}>
>>>>>>> ce2630a72c05d599670a3279ddad2cb671ff6526
            งาน ConneK เป็นงานที่จัดขึ้นของนิสิตภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัยและมหาวิทยาลัยเกษตรศาสตร์ 
            ภายในงานจะมีกิจกรรมที่ให้นิสิตของทั้งสองมหาวิทยาลัยทำร่วมกัน โดยมีจุดมุ่งหมายเพื่อสานสัมพันธ์ระหว่างนิสิตของ 2 มหาวิทยาลัย
          </p>
        </div>
      </div>
    </div>
  </FullScreen>
)

export default About;