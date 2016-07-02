import React from 'react';
import BotEntry from './BotEntry.jsx';

const BotsList = ({ bots, handlePost, handleMoving }) => (
  <div>
    {bots.map((bot, i) => (
      <div>
        <BotEntry
          key={i}
          bot={bot}
          handlePost={handlePost}
          handleMoving={handleMoving}
        />
      </div>
      )
    )}
  </div>
);

BotsList.propTypes = {
  bots: React.PropTypes.array,
  follows: React.PropTypes.array,
  handlePost: React.PropTypes.func,
  handleMoving: React.PropTypes.func,
};

export default BotsList;

