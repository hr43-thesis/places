import React from 'react';
import FeedContainer from './Feed/FeedContainer.jsx';
import Profile from './Sidebar/Profile.jsx';
import Rec from './Sidebar/Rec.jsx';
// import axios from 'axios';

const Home = () => (
  <div className="row">
    <div className="col s4">
      <Profile />
      <Rec />
    </div>
    <div className="col s8">
      <FeedContainer />
    </div>
  </div>
);

export default Home;
