import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import HomeContainer from './components/Home/HomeContainer.jsx';
import MainContainer from './components/Main/MainContainer.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path="places" component={MainContainer} />
  </Route>
);
