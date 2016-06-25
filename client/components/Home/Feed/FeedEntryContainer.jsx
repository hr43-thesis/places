import React, { Component } from 'react';
import FeedEntry from './FeedEntry.jsx';

class FeedEntryContainer extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <FeedEntry {...this.props} />
    );
  }
}

export default FeedEntryContainer;
