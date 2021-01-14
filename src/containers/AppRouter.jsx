import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import App from './App';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={App} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
};

export default AppRouter;
