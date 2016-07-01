import React from 'react';
import SearchBots from './SearchBots.jsx';
import BotsList from './BotsList.jsx';

const Bots = ({ bots, handlePost, follows, handleSearchUser, handleFollowUser }) => (
  // <div className="container">
  <div className="row">
    <div className="col s8 push-s2">
      <h1> Bot list </h1>
      <SearchBots
        handleSearchUser={handleSearchUser}
      />
    </div>
    <div className="col s8 push-s2">
      <BotsList
        bots={bots}
        handlePost={handlePost}
        follows={follows}
        handleFollowUser={handleFollowUser}
      />
    </div>
  </div>
  // </div>
);

Bots.propTypes = {
  bots: React.PropTypes.array,
  handlePost: React.PropTypes.func,
  follows: React.PropTypes.array,
  handleSearchUser: React.PropTypes.func,
  handleFollowUser: React.PropTypes.func,
};

export default Bots;
