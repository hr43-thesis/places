import React from 'react';

const imgStyle = { height: '100px' };
// const iconKey = {'on_foot':}
// <i class="fa fa-car fa-3x" aria-hidden="true"></i>
// <i class="fa fa-male fa-3x" aria-hidden="true"></i>

const FriendListEntry = ({ person, index, onListClick }) => {
  let icon = null;
  const timeOfLocUpdate = new Date(person.locUpdatedAt).getTime();
  if (true || new Date().getTime() - new Date(person.activityUpdatedAt).getTime() < 60000) {
    if (['on_foot', 'running', 'walking'].indexOf(person.activity) >= 0) {
      icon = <i className="fa fa-male fa-3x" style={{ color: 'red' }} aria-hidden="true"></i>;
    } else if (person.activity === 'in_vehicle') {
      icon = <i className="fa fa-car fa-3x" style={{ color: 'red' }} aria-hidden="true"></i>;
    } else if (person.activity === 'on_bicycle') {
      icon = <i className="fa fa-bicycle fa-3x" style={{ color: 'red' }} aria-hidden="true"></i>;
    }
  }
  const render = (new Date().getTime() - timeOfLocUpdate) < 4 * Math.pow(10, 7) ?
    (<div>
      <div className="card-panel grey lighten-5 z-depth-1 hoverable">
        <div
          style={{ display: 'flex', alignItems: 'center' }}
          className="row"
          onClick={() =>
                onListClick(index, person)
              }
        >
          <div className="col s4">
            <img
              alt="loading"
              style={imgStyle}
              src={person.imageUrl}
            />
          </div>
          <div className="col s4">
            <span style={{ fontWeight: 'bold', fontSize: 'large' }}>{person.name}</span>
          </div>
          <div className="col s2">
            {icon}
          </div>
        </div>
      </div>
    </div>
  ) : null;
  return render;
};

FriendListEntry.propTypes = {
  person: React.PropTypes.object,
  onListClick: React.PropTypes.func,
  index: React.PropTypes.number,
};

export default FriendListEntry;
