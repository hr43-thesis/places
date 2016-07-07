import React from 'react';
import FriendListEntry from './FriendListEntry.jsx';

const FriendList = (props) => (
  <div>
    {props.locate.map((person, index) => (
      <FriendListEntry
        onListClick={props.onListClick}
        person={person}
        key={index}
        index={index}
      />
      )
    )}
  </div>
);

FriendList.propTypes = {
  locate: React.PropTypes.array,
  onListClick: React.PropTypes.func,
};

export default FriendList;
