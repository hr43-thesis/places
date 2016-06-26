import React from 'react';
import Home from './Home.jsx';
import { connect } from 'react-redux';
// import * as placesActions from '../../redux/actions/placesActions';
import { bindActionCreators } from 'redux';
import * as favActions from '../../redux/actions/favActions';

class HomeContainer extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Home {...this.props} />
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    places: state.places,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(favActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
