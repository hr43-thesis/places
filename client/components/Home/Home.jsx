import React from 'react';
import FeedContainer from './Feed/FeedContainer.jsx';
import Profile from './Sidebar/Profile.jsx';
import Rec from './Sidebar/Rec.jsx';
// import axios from 'axios';

const Home = () => (
  <div>
    <div className="sidebar">
      <Profile />
      <Rec />
    </div>
    <div>
      <FeedContainer />
    </div>
  </div>
);

export default Home;
