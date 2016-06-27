import React from 'react';
import { connect } from 'react-redux';
import { setAuth } from '../../redux/actions/authActions';
import { bindActionCreators } from 'redux';
import { store } from '../../client';
import axios from 'axios';

function loginUser() {
  window.FB.login((response) => {
    if (response.status === undefined) {
      console.log('response is undefined');
    } else {
      // get request with token
      console.log('auth response', response.authResponse);
      console.log('entire response', response);
      store.dispatch(setAuth(response.authResponse.accessToken));
    } }, { scope: 'email' }, { return_scopes: true });
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

const Login = () => (
  <div>
    <h1>Login Page</h1>
    <button onClick={() => axios.get('http://localhost:7000/test', { withCredentials: true })}>Check Session</button>
    <button onClick={loginUser}>Login FB</button>
  </div>
);

Login.propTypes = {
  setAuth: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
