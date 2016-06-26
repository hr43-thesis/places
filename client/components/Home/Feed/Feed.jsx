import React from 'react';
import FeedEntryContainer from './FeedEntryContainer.jsx';

const Feed = (props) => (
  <div>
    <h1>Feeds Page</h1>
    {props.displayPlaces.map((place) => (
      <FeedEntryContainer key={place.userPlaceId} place={place} />
      )
    )}
  </div>
);

Feed.propTypes = {
  displayPlaces: React.PropTypes.array,
};

export default Feed;
