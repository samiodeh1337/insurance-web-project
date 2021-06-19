import React, { Component, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Auth from './components/Pages/Auth/Auth';

function App() {

 
  return (
  <div className="App">
    <Switch>
       {/* <Route exact path="/" component={Home}/> */}
       <Route exact path="/" component={Auth} />

      {/* <Route path="/Auth" component={Auth} /> */}
    
    </Switch>
    </div>
  );
}

export default App;
