import React from 'react';
import Follow from './Follow.jsx';
import { connect } from 'react-redux';

class FollowContainer extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Follow {...this.props} />
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(FollowContainer);
