import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feed from './Feed.jsx';
import { bindActionCreators } from 'redux';
import { loadDisplayPlaces } from '../../../redux/actions/displayPlacesActions';

class FeedContainer extends Component {
  componentWillMount() {
    this.props.loadDisplayPlaces(this.props.places, this.props.userId);
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
    displayPlaces: state.displayPlaces,
    userId: 1, // state.user.id,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadDisplayPlaces: bindActionCreators(loadDisplayPlaces, dispatch),
  };
};

FeedContainer.propTypes = {
  loadDisplayPlaces: React.PropTypes.func,
  places: React.PropTypes.array,
  displayPlaces: React.PropTypes.array,
  userId: React.PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
