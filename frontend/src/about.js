import React from 'react';
import FullScreen from './full-screen';

const About = () => (
  <FullScreen sectionName="about">
    <div className="container" style={{display: 'flex', height: '100%'}}>
      <div className="about header container"
        style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
      >
        <div className="splash logo">
          <h1> About Connek </h1>
        </div>
      </div>
      <div className="about text container"
        style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2em'}}
      >
  อพาร์ทเมนท์สะกอมออดิชั่น คำตอบกับดักซิตีกิมจิไฮเปอร์ อัตลักษณ์ดอกเตอร์ดีพาร์ตเมนท์นอมินี อุปัทวเหตุโกะ อาร์พีจีเก๋ากี้นิรันดร์วิป บู๊ แครกเกอร์โทรโข่งนอมินีต่อยอด ซัมเมอร์เมคอัพไรเฟิลแอปเปิ้ล แมมโบ้เคลมคอลัมน์ เยอร์บีราไฟลท์ มาเฟีย แดรี่สเตชันโอยัวะดาวน์ คำตอบแอปเปิ้ล เมาท์ มาร์เก็ตควิก ซูฮกปูอัดง่าว
      </div>
    </div>
  </FullScreen>
)

export default About;