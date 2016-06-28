import React, { Component } from 'react';
import FeedEntry from './FeedEntry.jsx';
import * as actionCreators from '../../../redux/actions/favsActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FeedEntryContainer extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <FeedEntry {...this.props} />
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    userId: state.user.id,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
};

FeedEntryContainer.propTypes = {
  userId: React.PropTypes.number,
};
export default connect(mapStateToProps, mapDispatchToProps)(FeedEntryContainer);
