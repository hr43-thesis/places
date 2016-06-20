import React from 'react';
import Login from './Login.jsx';

class LoginContainer extends React.Component {

  componentWillMount() {
    // check auth here later...
  }

  handleLoginClick() {
    // do something here...
    // call the login function with fb init2
  }

  render() {
    return (
      <Login {...this.props} />
    );
  }
}

export default LoginContainer;
