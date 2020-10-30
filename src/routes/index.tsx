import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

import Router from './Router';

const Routes: React.FC = () => (
  <Switch>
    <Router path="/" exact component={Dashboard} /> 
  </Switch>
);

export default Routes;
