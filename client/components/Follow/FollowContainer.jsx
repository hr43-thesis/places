import React from 'react';
import { connect } from 'react-redux';
import Follow from './Follow.jsx';
import * as actions from '../../redux/actions/followActions';
import utils from '../../../utils/utils';

class FollowContainer extends React.Component {
  constructor() {
    super();
    this.handleSearchUser = this.handleSearchUser.bind(this);
    this.handleFollowUser = this.handleFollowUser.bind(this);
  }

  getFollowedUser(followedId) {
    let followedUser = null;
    this.props.users.some((user) => {
      if (user.id === followedId) {
        followedUser = user;
      }
      return user.id === followedId;
    });
    return followedUser;
  }

  handleSearchUser(input) {
    this.props.searchUser(input);
  }

  handleFollowUser(followedId) {
    const userId = this.props.user.id;
    utils.followUser(userId, followedId, () => {
      const user = this.getFollowedUser(followedId);
      this.props.followUser(user);
    });
  }

  render() {
    return (
      <div>
        <Follow
          {...this.props}
          handleSearchUser={this.handleSearchUser}
          handleFollowUser={this.handleFollowUser}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  users: state.users,
  displayUsers: state.displayUsers,
  follows: state.follows,
});

FollowContainer.propTypes = {
  user: React.PropTypes.object,
  users: React.PropTypes.array,
  searchUser: React.PropTypes.func,
  followUser: React.PropTypes.func,
};

export default connect(mapStateToProps,
  { searchUser: actions.searchUser,
    followUser: actions.followUser,
  })(FollowContainer);
