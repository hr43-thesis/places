import React from 'react';
import FeedEntryContainer from './FeedEntryContainer.jsx';
import axios from 'axios';

const Feed = (props) => (
  <div>
    <h1>Feeds Page</h1>
    {Object.keys(props.places).map((placeId) => (
      <FeedEntryContainer place={props.places[placeId]} />
      )
    )}
    <button onClick={() => axios.get('http://localhost:7000/test', { withCredentials: true })}>Check Session</button>
  </div>
);

Feed.propTypes = {
  places: React.PropTypes.object,
};

export default Feed;
