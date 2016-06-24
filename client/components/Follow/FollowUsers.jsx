import React from 'react';
import FollowUsersEntry from './FollowUsersEntry.jsx';

const FollowUsers = ({ displayUsers, follows, handleFollowUser }) => (
  <div>
    {displayUsers.map((user, i) => {
      let followed = false;
      if (follows.length > 0) {
        follows.forEach((followedUser) => {
          if (user.id === followedUser.id) {
            followed = true;
          }
        });
      }
      return (
        <div>
          <FollowUsersEntry
            key={i}
            user={user}
            handleFollowUser={handleFollowUser}
            followed={followed}
          />
        </div>
      );
    })}
  </div>
);

FollowUsers.propTypes = {
  displayUsers: React.PropTypes.array,
  follows: React.PropTypes.array,
  handleFollowUser: React.PropTypes.func,
};

export default FollowUsers;
