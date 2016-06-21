import React from 'react';
import SearchUsers from './SearchUsers.jsx';
import FollowUsers from './FollowUsers.jsx';

const Follow = ({ users, displayUsers, handleSearchUser, handleFollowUser }) => (
  <div>
    <div>
      <SearchUsers
        users={users}
        handleSearchUser={handleSearchUser}
      />
    </div>
    <div>
      <FollowUsers
        displayUsers={displayUsers}
        handleFollowUser={handleFollowUser}
      />
    </div>
  </div>
);

Follow.propTypes = {
  users: React.PropTypes.object,
  displayUsers: React.PropTypes.object,
  handleSearchUser: React.PropTypes.object,
  handleFollowUser: React.PropTypes.object,
};

export default Follow;
