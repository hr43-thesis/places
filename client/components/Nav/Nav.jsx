import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from '../../redux/actions/authActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Nav extends React.Component {

  componentDidMount() {
    window.$('.button-collapse').sideNav();
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue-grey">
            <a href="#!" className="brand-logo">Places</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/"><i className="material-icons left">list</i>Home</Link></li>
              <li>
                <Link to="/myplaces">
                  <i className="material-icons left">person_pin</i>My Places
                </Link>
              </li>
              <li><Link to="/follow"><i className="material-icons left">search</i>Search</Link></li>
              <li>
                <Link to="/locate"><i className="material-icons left">my_location</i>Locate</Link>
              </li>
              {this.props.isAdmin ?
                <li>
                  <Link to="/bots">
                    <i className="material-icons left">android</i>Bot Control
                  </Link>
                </li> : null
              }
              {this.props.isAdmin ?
                <li>
                  <Link to="/stats">
                    <i className="material-icons left">assessment</i>App Stats
                  </Link>
                </li> : null
              }
              <li>
                <Link to="/welcome" onClick={() => { this.props.handleLogout(); }}>
                  <i className="material-icons left">input</i>Logout
                </Link>
              </li>
            </ul>
            <ul id="mobile-demo" className="side-nav">
              <li><Link to="/"><i className="material-icons left">list</i>Home</Link></li>
              <li>
                <Link to="/myplaces">
                  <i className="material-icons left">person_pin</i>My Places
                </Link>
              </li>
              <li><Link to="/follow"><i className="material-icons left">search</i>Search</Link></li>
              {this.props.isAdmin ?
                <li>
                  <Link to="/bots">
                    <i className="material-icons left">android</i>Bot Control
                  </Link>
                </li> : null
              }
              {this.props.isAdmin ?
                <li>
                  <Link to="/stats">
                    <i className="material-icons left">assessment</i>App Stats
                  </Link>
                </li> : null
              }
              <li>
                <Link to="/welcome" onClick={() => { this.props.handleLogout(); }}>
                  <i className="material-icons left">input</i>Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleLogout: bindActionCreators(handleLogout, dispatch),
  };
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    isAuth: state.isAuth,
    isAdmin: state.isAdmin,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

Nav.propTypes = {
  handleLogout: React.PropTypes.func,
  isAdmin: React.PropTypes.bool,
};
