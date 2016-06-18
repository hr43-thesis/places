import React from 'react';

const Main = (props) => (
  <div>
    <h1>Places:</h1>
    {Object.keys(props.places).map((placeId) => (
      <div>Place: {props.places[placeId].placeName}</div>
      )
    )}
  </div>
);

Main.propTypes = {
  places: React.PropTypes.object,
};

export default Main;
