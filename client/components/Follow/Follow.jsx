import React from 'react';
import SearchUsers from './SearchUsers.jsx';
import FollowUsers from './FollowUsers.jsx';

const Follow = ({ displayUsers, follows, handleSearchUser, handleFollowUser }) => (
  <div>
    <div>
      <SearchUsers
        handleSearchUser={handleSearchUser}
      />
    </div>
    <div>
      <FollowUsers
        displayUsers={displayUsers}
        follows={follows}
        handleFollowUser={handleFollowUser}
      />
    </div>
  </div>
);

Follow.propTypes = {
  displayUsers: React.PropTypes.array,
  follows: React.PropTypes.array,
  handleSearchUser: React.PropTypes.func,
  handleFollowUser: React.PropTypes.func,
};

export default Follow;
