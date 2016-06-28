import React from 'react';

const FollowUsersEntry = ({ user, followed, handleFollowUser }) => {
  let classProp = '';
  let symbol = '';
  if (followed) {
    classProp = 'btn-floating btn-small waves-effect waves-light red';
    symbol = 'remove';
  } else {
    classProp = 'btn-floating btn-small waves-effect waves-light green';
    symbol = 'add';
  }

  return (
    <div>
      <div className="card-panel grey lighten-5 z-depth-1 hoverable">
        <div className="row valign-wrapper">
          <div className="col s1">
            <a
              className={classProp}
              onClick={() => handleFollowUser(user.id, followed)}
            >
              <i className="material-icons">{symbol}</i>
            </a>
          </div>
          <div className="col s3 push-s5 offset-s2">
            <img src={user.imageUrl} alt="" className="responsive-img" />
          </div>
          <div className="col s1">
            <i className="material-icons">stars</i>
            {user.repCount}
          </div>
          <div className="col s5 pull-s5 offset-s1">
            <span className="black-text">
              <h5 className="valign-wrapper">
                {user.name}
              </h5>
              {' '}
              {user.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

FollowUsersEntry.propTypes = {
  user: React.PropTypes.object,
  followed: React.PropTypes.bool,
  handleFollowUser: React.PropTypes.func,
};

export default FollowUsersEntry;
