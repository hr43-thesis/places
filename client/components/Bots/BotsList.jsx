import React from 'react';
import BotEntry from './BotEntry.jsx';

const BotsList = (props) => (
  <div>
    {console.log(props)}
    {props.bots.map((bot, i) => (
      <div>
        <BotEntry
          key={i}
          bot={bot}
        />
      </div>
      )
    )}
  </div>
);

BotsList.propTypes = {
  bots: React.PropTypes.array,
  follows: React.PropTypes.array,
  handleFollowUser: React.PropTypes.func,
};

export default BotsList;

