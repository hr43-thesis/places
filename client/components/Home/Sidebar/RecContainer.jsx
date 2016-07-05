import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rec from './Rec.jsx';
import api from '../../../utils/api';
import { displayRecs } from '../../../redux/actions/recsActions';

class RecContainer extends Component {
  componentDidMount() {
    api.getRecommendations(1)
    .then(res => {
      const recs = res.data;
      this.props.displayRecs(recs);
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

const mapStateToProps = (state) => ({
  userId: state.user.id,
  recs: state.recs,
});

RecContainer.propTypes = {
  userId: React.PropTypes.number,
  recs: React.PropTypes.array,
  displayRecs: React.PropTypes.func,
};

export default connect(mapStateToProps,
  { displayRecs,
})(RecContainer);
