import React from 'react';
import { connect } from 'react-redux';
import Follow from './Follow.jsx';
import * as actions from '../../redux/actions/followActions';
import api from '../../../utils/api';

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

  // temp method for get follows
  getFollows() {
    api.getFollows(this.props.user.id)
    .then(response => {
      this.props.getFollows(response.data);
    });
  }

  handleSearchUser(input) {
    this.props.searchUser(input);
    this.getFollows();
  }

  handleFollowUser(followedId) {
    const userId = this.props.user.id;
    api.followUser(userId, followedId)
    .then(() => {
      console.log('Got response back from server.');
      const user = this.getFollowedUser(followedId);
      this.props.followUser(user);
    })
    .catch(error => {
      console.log(error);
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
  // temp prop validation
  getFollows: React.PropTypes.func,
};

export default connect(mapStateToProps,
  { searchUser: actions.searchUser,
    followUser: actions.followUser,
    // move getFollows out after refactor
    getFollows: actions.getFollows,
  })(FollowContainer);
