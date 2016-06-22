import React from 'react';
import FollowUsersEntry from './FollowUsersEntry.jsx';

const FollowUsers = ({ displayUsers, handleFollowUser }) => (
  <div>
    {displayUsers.map((user, i) =>
      <div>
        <FollowUsersEntry
          key={i}
          user={user}
          handleFollowUser={handleFollowUser}
        />
      </div>
    )}
  </div>
);

FollowUsers.propTypes = {
  displayUsers: React.PropTypes.array,
  handleFollowUser: React.PropTypes.func,
};

export default FollowUsers;
