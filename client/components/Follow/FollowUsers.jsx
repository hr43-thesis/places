import React from 'react';
import FollowUsersEntry from './FollowUsersEntry.jsx';

const FollowUsers = ({ displayUsers, handleFollowUser }) => (
  <div>
    {displayUsers ? displayUsers.map((user, i) =>
      <div>
        <FollowUsersEntry
          key={i}
          user={user}
          handleFollowUser={handleFollowUser}
        />
      </div>
    ) : null}
  </div>
);

FollowUsers.propTypes = {
  displayUsers: React.PropTypes.object,
  handleFollowUser: React.PropTypes.object,
};

export default FollowUsers;
