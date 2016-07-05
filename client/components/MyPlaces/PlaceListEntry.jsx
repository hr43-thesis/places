import React from 'react';


const PlaceListEntry = ({ index, place, onListClick }) => (
  <div
    onClick={() =>
      onListClick(index, place)
      }
  >
    <h5>{place.name}</h5>
    <span>"{place.note}" -{place.userName} </span>
  </div>
);

PlaceListEntry.propTypes = {
  place: React.PropTypes.object,
  index: React.PropTypes.number,
  onListClick: React.PropTypes.func,
};

export default PlaceListEntry;
