import React from 'react';
import ReactDOM from 'react-dom';

import "./scss/volt.scss";
import "@fortawesome/fontawesome-free/css/all.css";

import App from './App';
import reportWebVitals from './reportWebVitals';
import Signin from './pages/Signin';

ReactDOM.render(
  <React.StrictMode>
    <Signin />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
