import React from 'react';
import SearchUsers from './SearchUsers.jsx';
import FollowUsers from './FollowUsers.jsx';

const Follow = (props) => (
  <div>
    <div>
      Test
      <SearchUsers users={props.users} />
    </div>
    <div>
      <FollowUsers />
    </div>
  </div>
);

Follow.propTypes = {
  users: React.PropTypes.object,
};

export default Follow;
