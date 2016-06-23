import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import HomeContainer from './components/Home/HomeContainer.jsx';
import LoginContainer from './components/Login/LoginContainer.jsx';
import Auth from './components/HOC/Auth.jsx';
import FollowContainer from './components/Follow/FollowContainer.jsx';
import MyPlaces from './components/Map/Gmap.jsx';


export default (
  <Route path="">
    <Route path="/welcome" component={LoginContainer} />
    <Route path="/" component={Auth(App)} >
      <IndexRoute component={HomeContainer} />
      <Route path="follow" component={FollowContainer} />
      <Route path="myplaces" component={MyPlaces} />
    </Route>
  </Route>
);

