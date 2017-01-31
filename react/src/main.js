import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import UnitCreation from './components/UnitCreation'
import WeaponCreation from './components/WeaponCreation'

$(function() {
  ReactDOM.render((
    <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/unitcreation" component={UnitCreation}/>
    <Route path="/weaponcreation" component={WeaponCreation}/>
    </Router>
  ), document.getElementById('app')
  );
});
