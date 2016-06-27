import React from 'react';
import { connect } from 'react-redux';

const Profile = (props) => (
  <div className="card-panel grey lighten-5 z-depth-1">
    <h5>Hi {props.name}!</h5>
    <img className="center-align responsive-img" alt={props.name} src={props.imageUrl} />
  </div>
);

const mapStateToProps = function mapStateToProps(state) {
  return {
    imageUrl: state.user.imageUrl,
    name: state.user.name,
  };
};

Profile.propTypes = {
  imageUrl: React.PropTypes.string,
  name: React.PropTypes.string,
};

export default connect(mapStateToProps)(Profile);
