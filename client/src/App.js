import React, { Component, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Auth from './components/Pages/Auth/Auth';
import Insurance from './components/Pages/insurance/Insurance';
import HomePage from './components/Pages/dashboard/homepage';
import NotFound from './components/Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/dashboard" component={HomePage} />
        <Route exact path="/sign-in" component={Auth} />
        <Route exact path="/new_insurance" component={Insurance} />
        <Route exact path="*" component={NotFound} />

      </Switch>
    </div>
  );
}

export default App;
