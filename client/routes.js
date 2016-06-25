import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';
import LoginContainer from './components/Login/LoginContainer.jsx';
import Auth from './components/HOC/Auth.jsx';
import FollowContainer from './components/Follow/FollowContainer.jsx';
import MyPlaces from './components/MyPlaces/MyPlaces.jsx';


export default (
  <Route path="">
    <Route path="/welcome" component={LoginContainer} />
    <Route path="/" component={Auth(App)} >
      <IndexRoute component={Home} />
      <Route path="follow" component={FollowContainer} />
      <Route path="myplaces" component={MyPlaces} />
    </Route>
  </Route>
);
