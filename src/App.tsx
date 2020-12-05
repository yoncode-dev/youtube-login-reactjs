import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

//Provider
import { AuthProvider } from './context/auth';

import Route from './router'

import Menu from './components/menu';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Menu />
        <Route />
      </AuthProvider>
    </Router>
  );
}

export default App;
