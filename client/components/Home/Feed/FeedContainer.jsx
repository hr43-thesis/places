import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feed from './Feed.jsx';

class FeedContainer extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <Feed {...this.props} />
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    places: state.places,
  };
};

export default connect(mapStateToProps)(FeedContainer);
