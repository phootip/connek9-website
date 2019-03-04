import React from 'react';
import FullScreen from './full-screen';
import { TIME_TABLE } from './constants';

const TimeTable = () => (
  <FullScreen sectionName="timetable">
    <div className="page-container" style={{display: 'flex', height: '100%'}}>
      <div className="sub-container"
        style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2em'}}
      >
        <TimeTableList />
      </div>
      <div className="sub-container page-header"
        style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
      >
        <div className="splash logo header-text">
          <h1> Time Table </h1>
        </div>
      </div>
    </div>
  </FullScreen>
)

const TimeTableList = () => (
  <div>
    <ul className="timetable">
      {
        TIME_TABLE.map(item => (
          <li> {item.time} <span className="timetable-item-content">{item.content}</span> </li>
        ))
      }
    </ul>
  </div>
)

export default TimeTable;