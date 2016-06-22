import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import HomeContainer from './components/Home/HomeContainer.jsx';
import LoginContainer from './components/Login/LoginContainer.jsx';
import Auth from './components/HOC/Auth.jsx';


export default (
  <Route path="">
    <Route path="/welcome" component={LoginContainer} />
    <Route path="/" component={Auth(App)} >
      <IndexRoute component={HomeContainer} />
    </Route>
  </Route>
);


// <IndexRoute component={LoginContainer} />
// <Route path="home" component={Auth(App)} />
