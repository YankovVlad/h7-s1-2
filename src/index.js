import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App.js';
import Counter from './Counter.js'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);
