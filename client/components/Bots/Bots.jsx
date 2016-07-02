import React from 'react';
import SearchBots from './SearchBots.jsx';
import BotsList from './BotsList.jsx';

const Bots = ({ bots, handlePost, addBot, handleSearchUser, handleMoving }) => (
  // <div className="container">
  <div className="row">
    <div className="col s8 push-s2">
      <h1> Bot list </h1>
      <div>
        <a
          className="btn-floating btn-small waves-effect waves-light green"
          onClick={() => addBot('posting')}
        >
          <i className="material-icons">add</i>
        </a>
        <span> Add Posting Bot </span>
        <a
          className="btn-floating btn-small waves-effect waves-light green"
          onClick={() => addBot('moving')}
        >
          <i className="material-icons">add</i>
        </a>
        <span> Add Moving Bot </span>
      </div>
      <SearchBots
        handleSearchUser={handleSearchUser}
      />
    </div>
    <div className="col s8 push-s2">
      <BotsList
        bots={bots}
        handlePost={handlePost}
        handleMoving={handleMoving}
      />
    </div>
  </div>
  // </div>
);

Bots.propTypes = {
  bots: React.PropTypes.array,
  handlePost: React.PropTypes.func,
  addBot: React.PropTypes.func,
  handleSearchUser: React.PropTypes.func,
  handleMoving: React.PropTypes.func,
};

export default Bots;
