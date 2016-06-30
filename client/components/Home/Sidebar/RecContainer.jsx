import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rec from './Rec.jsx';
import api from '../../../utils/api';

class RecContainer extends Component {
  componentDidMount() {
    api.getRecommendations(this.props.userId)
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      // Add error handling
      console.log(error);
    });
  }
  render() {
    return (
      <Rec {...this.props} />
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    userId: state.user.id,
  };
};

RecContainer.propTypes = {
  userId: React.PropTypes.number,
};

export default connect(mapStateToProps)(RecContainer);
