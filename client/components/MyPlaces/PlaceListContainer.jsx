import React from 'react';
import PlaceListEntry from './PlaceListEntry.jsx';

const PlaceList = (props) => (
  <div>
    {props.places.map((place, index) => (
      <PlaceListEntry
        onListClick={props.onListClick}
        place={place}
        key={index}
        index={index}
      />
      )
    )}
  </div>
);

PlaceList.propTypes = {
  places: React.PropTypes.array,
  onListClick: React.PropTypes.func,
};

export default PlaceList;
