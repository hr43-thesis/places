import React from 'react';

const FeedEntry = (props) => (
  <div>
    {props.place.name}
    {' '}
    {props.place.name}
    {' '}
    {props.place.lat}
    {' '}
    {props.place.lng}
    {' '}
    Fav Count: {props.place.favsCount}
    {' '}
    {props.place.imageUrl}
    {' '}
    {props.place.note}
  </div>
);

FeedEntry.propTypes = {
  place: React.PropTypes.object,
};

export default FeedEntry;
