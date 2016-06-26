import React, { Component } from 'react';
import App from './App.jsx';
import { connect } from 'react-redux';
import api from '../../utils/api';
import { bindActionCreators } from 'redux';
import { loadPlaces } from '../redux/actions/placesActions';
import { loadDisplayPlaces } from '../redux/actions/displayPlacesActions';

class AppContainer extends Component {

  componentWillMount() {
    api.getPlaces(this.props.userId)
      .then((places) => {
        console.log('Places from req resp--->', places.data);
        this.props.loadPlaces(places.data);
        this.props.loadDisplayPlaces(places.data, this.props.userId);
      })
      .then(() => {
      })
      .catch((err) => {
        console.log('There was an error:', err);
      });
  }
  componentDidMount() {
  }

  render() {
    return (
      <App {...this.props} />
    );
  }

}

const mapStateToProps = function mapStateToProps(state) {
  return {
    isAuth: state.isAuth,
    userId: 1, // set to 1 for testing, should be: state.user.id,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadPlaces: bindActionCreators(loadPlaces, dispatch),
    loadDisplayPlaces: bindActionCreators(loadDisplayPlaces, dispatch),
  };
};

AppContainer.propTypes = {
  userId: React.PropTypes.number,
  loadPlaces: React.PropTypes.func,
  loadDisplayPlaces: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
