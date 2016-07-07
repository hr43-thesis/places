import React from 'react';

// location_on

const PlaceListEntry = ({ index, place, onListClick }) => (
  <div
    onClick={() =>
      onListClick(index, place)
      }
  >
    <div className="card-panel grey lighten-5 z-depth-1 hoverable">
      <div className="row">
        <div className="col s2">
          <a style={{ cursor: 'pointer' }}><i
            className="material-icons"
            onClick={() => console.log('clicked')}
          >
            location_on
          </i></a>
        </div>
        <div className="col s10">
          <span style={{ fontWeight: 'bold', fontSize: 'large' }}>{place.name}</span>
        </div>
        <div>
          <span style={{ fontStyle: 'italic' }}>"{place.note}"</span> -{place.userName}
        </div>
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
