import React, { Component } from 'react';
import api from '../../../utils/api';
import FeedEntry from './FeedEntry.jsx';

class FeedEntryContainer extends Component {
  componentDidMount() {

  }
  handleAddFav(userId, placeId, userPlaceId) {
    console.log(userId, placeId, userPlaceId);
    api.addFav(userId, placeId, userPlaceId)
      .then((response) => {
        console.log('Response from adding to favs:', response);
      })
      .catch((err) => {
        console.log('There was an error:', err);
      });
  }
  render() {
    return (
      <FeedEntry {...this.props} handleAddFav={this.handleAddFav} />
    );
  }
}

export default FeedEntryContainer;
