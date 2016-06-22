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

  handleSearchUser(input) {
    this.props.searchUser(input);
  }

  handleFollowUser(userId) {
    console.log(this.props);
    const followedUser = utils.followUser(userId);
    console.log(followedUser);
    this.props.followUser(followedUser);
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
  displayUsers: state.displayUsers,
});

FollowContainer.propTypes = {
  searchUser: React.PropTypes.func,
  followUser: React.PropTypes.func,
};

export default connect(mapStateToProps,
  { searchUser: actions.searchUser,
    followUser: actions.followUser,
  })(FollowContainer);
