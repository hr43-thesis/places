import React from 'react';
import Main from './Main.jsx';
import { connect } from 'react-redux';
// import * as placesActions from '../../redux/actions/placesActions';

class MainContainer extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Main {...this.props} />
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    places: state.places,
  };
};

export default connect(mapStateToProps)(MainContainer);
