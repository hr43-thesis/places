import React from 'react';

const imgStyle = { height: '100px' };
// const iconKey = {'on_foot':}
// <i class="fa fa-car fa-3x" aria-hidden="true"></i>
// <i class="fa fa-male fa-3x" aria-hidden="true"></i>

const FriendListEntry = ({ person, index, onListClick }) => {
  let icon = null;
  if (true || new Date().getTime() - new Date(person.activityUpdatedAt).getTime() < 60000) {
    if (['on_foot', 'running', 'walking'].indexOf(person.activity) >= 0) {
      icon = <i className="fa fa-male fa-3x" style={{ color: 'red' }} aria-hidden="true"></i>;
    } else if (person.activity === 'in_vehicle') {
      icon = <i className="fa fa-car fa-3x" style={{ color: 'red' }} aria-hidden="true"></i>;
    } else if (person.activity === 'on_bicycle') {
      icon = <i className="fa fa-bicycle fa-3x" style={{ color: 'red' }} aria-hidden="true"></i>;
    }
  }
  return (
    <div>
      <h5>{person.name}</h5>
      <img
        onClick={() =>
          onListClick(index, person)
        }
        alt="loading"
        style={imgStyle}
        src={person.imageUrl}
      />
      {icon}
    </div>
  );
};

FriendListEntry.propTypes = {
  person: React.PropTypes.object,
  onListClick: React.PropTypes.func,
  index: React.PropTypes.number,
};

export default FriendListEntry;
