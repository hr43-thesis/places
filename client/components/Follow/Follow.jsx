import React from 'react';
import SearchUsers from './SearchUsers.jsx';
import FollowUsers from './FollowUsers.jsx';

const Follow = ({ displayUsers, follows, handleSearchUser, handleFollowUser }) => (
  // <div className="container">
  <div className="row">
    <div className="col s8 push-s2">
      <SearchUsers
        handleSearchUser={handleSearchUser}
      />
    </div>
    <div className="col s8 push-s2">
      <FollowUsers
        displayUsers={displayUsers}
        follows={follows}
        handleFollowUser={handleFollowUser}
      />
    </div>
  </div>
  // </div>
);

Follow.propTypes = {
  displayUsers: React.PropTypes.array,
  follows: React.PropTypes.array,
  handleSearchUser: React.PropTypes.func,
  handleFollowUser: React.PropTypes.func,
};

export default Follow;
