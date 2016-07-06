import React from 'react';
import FeedContainer from './Feed/FeedContainer.jsx';
import Profile from './Sidebar/Profile.jsx';
import RecContainer from './Sidebar/RecContainer.jsx';

const Home = () => (
  <div className="row">
    <div className="col s3">
      <Profile />
    </div>
    <div className="col s6">
      <FeedContainer />
    </div>
    <div className="col s3">
      <RecContainer />
    </div>
  </div>
);


export default Home;
