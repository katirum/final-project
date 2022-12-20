import React from 'react';
import ReactDOM from 'react-dom';
/* import ReactDOM, { createRoot } from 'react-dom/client'; */
import './reset.css';
import './bootstrap.min.css'
import './index.css';
import { App } from './App';
/* import reportWebVitals from './reportWebVitals'; */
import {
    BrowserRouter as Router,
  } from "react-router-dom";
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );




  //previous code
  /*const container = document.getElementById('root');
const root = createRoot(container);
 root.render(<App />); */