import React from 'react';
import utils from '../../../utils/utils';

class FollowUsersEntry extends React.Component() {
  handleFollowUser(user) {
    utils.followUser(user);
  }

  render() {
    const { user } = this.props;

    return (
      <div onClick={() => this.handleFollowUser(user)}>user</div>
    );
  }
}

export default FollowUsersEntry;
