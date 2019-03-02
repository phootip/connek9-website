import React from 'react';
import FullScreen from './full-screen';

const TimeTable = () => (
  <FullScreen sectionName="timetable">
    <div className="container" style={{display: 'flex', height: '100%'}}>
      <div className="about text container"
        style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2em'}}
      >
        <TimeTableList />
      </div>
      <div className="about header container"
        style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
      >
        <div className="splash logo">
          <h1> Time Table </h1>
        </div>
      </div>
    </div>
  </FullScreen>
)

const TimeTableList = () => (
  <div>
    <ul className="timetable">
      <li> 10:00 do this </li>
      <li> 11:00 do that </li>
      <li> 13:00 do that again </li>
      <li> 14:00 do this again </li>
    </ul>
  </div>
)

export default TimeTable;