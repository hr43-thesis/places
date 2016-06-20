import React from 'react';

const Home = (props) => (
  <div>
    <h1>Feeds Page</h1>
    {Object.keys(props.places).map((placeId) => (
      <div>Place: {props.places[placeId].placeName}</div>
      )
    )}
  </div>
);

Home.propTypes = {
  places: React.PropTypes.object,
};

export default Home;
