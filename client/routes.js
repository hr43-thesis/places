import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppContainer from './components/AppContainer.jsx';
import Home from './components/Home/Home.jsx';
import LoginContainer from './components/Login/LoginContainer.jsx';
import Auth from './components/HOC/Auth.jsx';
import FollowContainer from './components/Follow/FollowContainer.jsx';
import MyPlaces from './components/MyPlaces/MyPlaces.jsx';
import Locate from './components/Locate/LocateContainer.jsx';
import BotsContainer from './components/Bots/BotsContainer.jsx';

export default (
  <Route path="">
    <Route path="/welcome" component={LoginContainer} />
    <Route path="/" component={Auth(AppContainer)} >
      <IndexRoute component={Home} />
      <Route path="follow" component={FollowContainer} />
      <Route path="myplaces" component={MyPlaces} />
      <Route path="locate" component={Locate} />
      <Route path="bots" component={BotsContainer} />
    </Route>
  </Route>
);
