import React from 'react';
import { Router, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import App from './App';
import history from '../history';

const AppRouter = () => {
  return (
    <Router history={history}>
      <Route path="/" exact component={App} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
    </Router>
  );
};

export default AppRouter;
