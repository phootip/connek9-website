import React from 'react';
import ReactDOM from 'react-dom';
// import './css/normalize.css';
import './css/index.scss';
import './css/transitions.css';
import App from './App';

document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

ReactDOM.render(<App />, document.getElementById('root'));