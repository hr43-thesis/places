import React from 'react';


const PlaceListEntry = ({ index, place, onListClick }) => (
  <div
    onClick={() =>
      onListClick(index, place)
      }
  >
    <div className="card-panel grey lighten-5 z-depth-1 hoverable">
      <div>
        {place.name}
      </div>
      <div>
        <span style={{ fontStyle: 'italic' }}>"{place.note}"</span> -{place.userName}
      </div>
    </div>
  </div>
);

PlaceListEntry.propTypes = {
  place: React.PropTypes.object,
  index: React.PropTypes.number,
  onListClick: React.PropTypes.func,
};

export default PlaceListEntry;
