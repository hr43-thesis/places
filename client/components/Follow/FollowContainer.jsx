import React from 'react';
import { connect } from 'react-redux';
import Follow from './Follow.jsx';
import utils from '../../../utils/utils';

class FollowContainer extends React.Component {
  handleSearchUser() {
    console.log(`search val: ${this.refs.search.value}`);
    this.props.searchUser();
  }

  handleFollowUser(userId) {
    const followedUser = utils.followUser(userId);
    console.log(followedUser);
    this.props.followUser(followedUser);
  }

  render() {
    return (
      <Follow
        {...this.props}
        handleSearchUser={this.handleSearchUser}
        handleFollowUser={this.handleFollowUser}
      />
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users,
    display: state.displayUsers,
  };
};

FollowContainer.propTypes = {
  searchUser: React.PropTypes.object,
  followUser: React.PropTypes.object,
};

export default connect(mapStateToProps)(FollowContainer);
