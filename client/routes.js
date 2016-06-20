import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import HomeContainer from './components/Home/HomeContainer.jsx';
import LoginContainer from './components/Login/LoginContainer.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginContainer} />
    <Route path="home" component={HomeContainer} />
  </Route>
);
