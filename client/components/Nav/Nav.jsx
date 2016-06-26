import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from '../../redux/actions/authActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Nav = (props) => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/follow">Search</Link>
    <Link to="/myplaces">My Places</Link>
    <button onClick={() => { props.handleLogout(); }}> logout </button>
  </nav>
);

function mapDispatchToProps(dispatch) {
  return {
    handleLogout: bindActionCreators(handleLogout, dispatch),
  };
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    isAuth: state.isAuth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

Nav.propTypes = {
  handleLogout: React.PropTypes.func,
};
