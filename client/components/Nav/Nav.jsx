import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from '../../redux/actions/authActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Nav = (props) => (
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/"><i className="material-icons left">list</i>Home</Link></li>
        <li>
          <Link to="/myplaces">
            <i className="material-icons left">person_pin</i>My Places
          </Link>
        </li>
        <li><Link to="/follow"><i className="material-icons left">search</i>Search</Link></li>
        <li>
          <a href="" onClick={() => { props.handleLogout(); }}>
            <i className="material-icons left">input</i>Logout
          </a>
        </li>
      </ul>
    </div>
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
