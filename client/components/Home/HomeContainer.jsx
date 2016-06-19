import React from 'react';
import Home from './Home.jsx';

class HomeContainer extends React.Component {

  componentWillMount() {
    // check auth here later...
  }

  handleLoginClick() {
    // do something here...
    // call the login function with fb init2
  }

  render() {
    return (
      <Home {...this.props} />
    );
  }
}

export default HomeContainer;
