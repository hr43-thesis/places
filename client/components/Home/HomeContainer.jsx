import React from 'react';
import Home from './Home.jsx';

class HomeContainer extends React.Component {

  componentWillMount() {
    // check auth here later...
  }

  render() {
    return (
      <Home {...this.props} />
    );
  }
}

export default HomeContainer;
