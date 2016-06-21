import React from 'react';
import FollowUsersEntry from './FollowUsersEntry.jsx';

class FollowUsers extends React.Component() {
  render() {
    const users = ['Adam', 'Andrew', 'Jordan', 'Sepher'];
    return (
      <div>
        {users.map((user, i) =>
          <div>
            <FollowUsersEntry key={i} user={user} />
          </div>
        )}
      </div>
    );
  }
}

export default FollowUsers;
