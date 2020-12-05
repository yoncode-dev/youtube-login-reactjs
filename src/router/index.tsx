import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//Rota
import PrivateRouter from './rotaPrivada';

import Home from '../pages/home';
import About from '../pages/about';
import Logar from '../pages/logar';
import Dashboard from '../pages/dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/logar" component={Logar} />
    <PrivateRouter path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;