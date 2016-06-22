import React from 'react';
import { connect } from 'react-redux';
import { setAuth } from '../../redux/actions/authActions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

function loginUser() {
  window.fbLogin = function fbLogin() {
    (function fbSdk(d, s, id) {
      const js = d.createElement(s); js.id = id;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  };

  // setup window.fbAsyncInit function
  window.fbAsyncInit = () => {
    const fb = window.FB;

    // fb.init()
    fb.init({
      appId: '627109000797802',
      xfbml: true,
      version: 'v2.6',
      cookie: true,
    });

    fb.login((response) => {
      if (response.status === undefined) {
        console.log('response is undefined');
      } else {
        // get request with token
        console.log('auth response', response.authResponse);
        console.log('entire response', response);
      }
    }, { scope: 'email' }, { return_scopes: true });
  };
  window.fbLogin();
}

function mapDispatchToProps(dispatch) {
  return {
    setAuth: bindActionCreators(setAuth, dispatch),
  };
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    isAuth: state.isAuth,
  };
};

const Login = (props) => (
  <div>
    <h1>Login Page</h1>
    <button onClick={() => props.setAuth(true)}>Simulated Login</button>
    <Link to="/">Go to index Route</Link>
    <button onClick={loginUser}>Login FB</button>
  </div>
);

Login.propTypes = {
  setAuth: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
