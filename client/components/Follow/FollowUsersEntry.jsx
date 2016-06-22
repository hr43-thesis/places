import React from 'react';

const FollowUsersEntry = ({ user, handleFollowUser }) => (
  <div onClick={() => handleFollowUser(user.id)}>{user.name}</div>
);

FollowUsersEntry.propTypes = {
  user: React.PropTypes.object,
  handleFollowUser: React.PropTypes.func,
};

export default FollowUsersEntry;
