import React from 'react';
import SearchUsers from './SearchUsers.jsx';
import FollowUsers from './FollowUsers.jsx';

const Follow = ({ displayUsers, handleSearchUser, handleFollowUser }) => (
  <div>
    <div>
      <SearchUsers
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
  displayUsers: React.PropTypes.array,
  handleSearchUser: React.PropTypes.func,
  handleFollowUser: React.PropTypes.func,
};

export default Follow;
