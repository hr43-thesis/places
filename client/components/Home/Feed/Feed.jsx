import React from 'react';
import FeedEntryContainer from './FeedEntryContainer.jsx';

const Feed = (props) => (
  <div>
    {props.displayPlaces.map((place, index) => (
      <FeedEntryContainer key={index} place={place} />
      )
    )}
  </div>
);

Feed.propTypes = {
  displayPlaces: React.PropTypes.array,
};

export default Feed;
