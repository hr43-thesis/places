import React from 'react';
import BotEntry from './BotEntry.jsx';

const BotsList = ({ bots, handlePost }) => (
  <div>
    {bots.map((bot, i) => (
      <div>
        <BotEntry
          key={i}
          bot={bot}
          handlePost={handlePost}
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
};

export default BotsList;

