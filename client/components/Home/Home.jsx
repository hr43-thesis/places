import React from 'react';
import FeedContainer from './Feed/FeedContainer.jsx';
import Profile from './Sidebar/Profile.jsx';
import RecContainer from './Sidebar/RecContainer.jsx';

const Home = () => (
  <div className="row">
    <div className="col s3">
      <Profile />
      <RecContainer />
    </div>
    <div className="col s9">
      <FeedContainer />
    </div>
  </div>
);


export default Home;
