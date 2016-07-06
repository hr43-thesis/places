import React, { Component } from 'react';
import App from './App.jsx';
import { connect } from 'react-redux';
import api from '../utils/api';
import { bindActionCreators } from 'redux';
import { loadPlaces } from '../redux/actions/placesActions';
import { loadDisplayPlaces } from '../redux/actions/displayPlacesActions';
import { fetchUsers } from '../redux/actions/usersActions';
import { getFollows } from '../redux/actions/followActions';
import { loadFavs } from '../redux/actions/favsActions';
import { getBots } from '../redux/actions/botsActions';

class AppContainer extends Component {

  componentWillMount() {
    api.getPlaces(this.props.userId)
      .then((places) => {
        this.props.loadPlaces(places.data);
        this.props.loadDisplayPlaces(places.data, this.props.userId);
      })
      .then(() => {
      })
      .catch((err) => {
        console.log('There was an error:', err);
      });

    api.getFollows(this.props.userId)
    .then(res => {
      this.props.getFollows(res.data);
    })
    .catch(err => {
      console.log('There was an error: ', err);
    });
    this.props.fetchUsers();
    this.props.loadFavs(this.props.userId);
    this.props.getBots();
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
    userId: state.user.id, // set to 1 for testing, should be: state.user.id,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadPlaces: bindActionCreators(loadPlaces, dispatch),
    loadDisplayPlaces: bindActionCreators(loadDisplayPlaces, dispatch),
    fetchUsers: bindActionCreators(fetchUsers, dispatch),
    getFollows: bindActionCreators(getFollows, dispatch),
    loadFavs: bindActionCreators(loadFavs, dispatch),
    getBots: bindActionCreators(getBots, dispatch),
  };
};

AppContainer.propTypes = {
  userId: React.PropTypes.number,
  loadPlaces: React.PropTypes.func,
  loadDisplayPlaces: React.PropTypes.func,
  fetchUsers: React.PropTypes.func,
  getFollows: React.PropTypes.func,
  loadFavs: React.PropTypes.func,
  getBots: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
