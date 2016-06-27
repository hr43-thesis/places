import React, { Component } from 'react';
import Rec from './Rec.jsx';

class RecContainer extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <Rec {...this.props} />
    );
  }
}

export default RecContainer;
