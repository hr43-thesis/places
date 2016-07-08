import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from '../../redux/actions/authActions';
import { loadPlaces } from '../../redux/actions/placesActions';
import { loadDisplayPlaces } from '../../redux/actions/displayPlacesActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../utils/api';

class Nav extends React.Component {

  componentDidMount() {
    window.$('.button-collapse').sideNav();
  }

  handleReload() {
    api.getPlaces(this.props.userId)
      .then((places) => {
        console.log('Updating places...', places.data);
        this.props.loadPlaces(places.data);
        this.props.loadDisplayPlaces(places.data, this.props.userId);
      })
      .catch((err) => {
        console.log('There was an error.', err);
      });
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue-grey">
            <Link to="/" className="brand-logo">Places</Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
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
              {false ?
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
              <li>
                <a alt="Update places feed" onClick={() => { this.handleReload(); }}>
                  <i className="material-icons left">replay</i>
                </a>
              </li>
            </ul>
            <ul id="mobile-demo" className="side-nav">
              <li>
                <Link to="/">
                  <i className="material-icons left">list</i>Home
                </Link>
              </li>
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
              {false ?
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
    loadPlaces: bindActionCreators(loadPlaces, dispatch),
    loadDisplayPlaces: bindActionCreators(loadDisplayPlaces, dispatch),
  };
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    isAuth: state.isAuth,
    isAdmin: state.isAdmin,
    userId: state.user.id,
  };
};

Nav.propTypes = {
  handleLogout: React.PropTypes.func,
  isAdmin: React.PropTypes.bool,
  userId: React.PropTypes.number,
  handleReload: React.PropTypes.func,
  loadPlaces: React.PropTypes.func,
  loadDisplayPlaces: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
