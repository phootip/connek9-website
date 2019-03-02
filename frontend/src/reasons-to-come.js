import React from 'react';
import FullScreen from './full-screen';

const ReasonsToCome = () => (
  <FullScreen sectionName="reasons">
    <div className="container" style={{display: 'flex', height: '100%'}}>
      <div className="about header container"
        style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
      >
        <div className="splash logo">
          <h1> Reasons to Come </h1>
        </div>
      </div>
      <div className="about text container"
        style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2em'}}
      >
        สมิติเวชตี๋พุทโธ ไลน์เฟรช ปอดแหกเที่ยงคืนตรวจสอบ ชาร์ปโคโยตีแคปเซนเซอร์เตี๊ยม ไฟแนนซ์บุญคุณแซลมอนเวณิกา นายพราน ออร์แกนิกแดนซ์เลคเชอร์ ไกด์วอร์รูม อีโรติกวอฟเฟิล โพลารอยด์ยะเยือกโมจิ เคลมนิรันดร์นางแบบ พีเรียดคอนโด โซน เด้อคอลัมน์ โอวัลติน แรงผลักเทียมทานแอ็คชั่นว่ะเพียว
      </div>
    </div>
  </FullScreen>
)

export default ReasonsToCome;