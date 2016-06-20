import React from 'react';
import Home from './Home.jsx';
import { connect } from 'react-redux';
// import * as placesActions from '../../redux/actions/placesActions';

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
  };
};

export default connect(mapStateToProps)(HomeContainer);
