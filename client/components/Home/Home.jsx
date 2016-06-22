import React from 'react';
import axios from 'axios';

const Home = (props) => (
  <div>
    <h1>Feeds Page</h1>
    {Object.keys(props.places).map((placeId) => (
      <div>Place: {props.places[placeId].placeName}</div>
      )
    )}
    <button onClick={() => axios.get('http://localhost:7000/test', { withCredentials: true })}>Check Session</button>
  </div>
);

Home.propTypes = {
  places: React.PropTypes.object,
};

export default Home;
