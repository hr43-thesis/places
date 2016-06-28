import React from 'react';
import { connect } from 'react-redux';
import Follow from './Follow.jsx';
import * as actions from '../../redux/actions/followActions';
import { combineUsers } from '../../redux/actions/displayUsersActions';
import { removeFollowedUser } from '../../redux/actions/usersActions';
import api from '../../utils/api';

class FollowContainer extends React.Component {
  constructor() {
    super();
    this.handleSearchUser = this.handleSearchUser.bind(this);
    this.handleFollowUser = this.handleFollowUser.bind(this);
  }

  componentWillMount() {
    this.props.combineUsers();
  }

  handleSearchUser(input) {
    this.props.searchUser(input);
  }

  handleFollowUser(followedId, followed) {
    const userId = this.props.user.id;
    api.followUser(userId, followedId, followed)
    .then(res => {
      console.log(`${res.status}: Got successful response back from server.`);
      this.props.followUser(res.data);
      this.props.removeFollowedUser(followedId);
      api.getFollowPlaces(followedId)
      .then(resp => {
        console.log(`${resp.status}: Got successful response back from server.`);
        this.props.getFollowPlaces(resp.data);
      });
    })
    .catch(error => {
      // Add error handling
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
  getFollowPlaces: React.PropTypes.func,
  combineUsers: React.PropTypes.func,
  removeFollowedUser: React.PropTypes.func,
};

export default connect(mapStateToProps,
  { searchUser: actions.searchUser,
    followUser: actions.followUser,
    getFollowPlaces: actions.getFollowPlaces,
    combineUsers,
    removeFollowedUser,
  })(FollowContainer);
