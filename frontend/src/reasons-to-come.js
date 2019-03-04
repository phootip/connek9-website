import React from 'react';
import FullScreen from './full-screen';

const ReasonsToCome = () => (
  <FullScreen sectionName="reasons">
    <div className="container" style={{display: 'flex', height: '100%'}}>
      <div className="about header container"
        style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
      >
        <div className="animatedParent">
          <div className="splash logo animated fadeInUpShort header-text">
            <h1> Reason to come </h1>
          </div>
        </div>
      </div>
      <div className="about text container"
        style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2em'}}
      >
        <div className='animatedParent'>
          <div className="animated bounceInRight content-text">
            <ul>
              <li>ได้เจอเพื่อนๆ พี่ๆ ร่วมชะตากรรมในสายงานเดียวกัน แบ่งปันประสบการณ์เพิ่ม <u><b>connek</b></u>tion ให้กับตัวเอง</li>
              <li>มีกิจกรรม ใช้แรงใช้ความคิดประลองปัญญา? มั้งไม่รู้อะต้องถามฝ่ายกิจดู แต่ที่แน่ๆคือสนุกแน่นอน</li>
              <li>มีของฟรี(ใครๆก็ชอบ)แจกจากสปอนเซอร์ โดยเฉพาะสติกเกอร์สุด Geek เอาไปแปะคอมแก้เบื่อเพื่อประกาศให้โลกรู้ว่าเราอะภาคคอม</li>
              <li>เว็บก็มี logoก็มี themeก็มี สปอนเซอร์ก็มี สตาฟก็มี ของกินยังมี แต่ขาดอย่างเดียวคือยังไม่มีเธอ...หมายถึงยังไม่มีน้องๆ อย่าลืมมาแล้วชวนเพื่อนมาด้วยนะจ๊ะ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </FullScreen>
)

export default ReasonsToCome;