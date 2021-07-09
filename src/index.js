import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './S1-App.js';
import Counter from './S2-Counter.js'



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Counter />

  </React.StrictMode>,
  document.getElementById('root')
);
