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
      <span>{user.name} </span>
      <span>{user.repCount} </span>
      <a
        className={classProp}
        onClick={() => handleFollowUser(user.id, followed)}
      >
        <i className="material-icons">{symbol}</i>
      </a>
    </div>
  );
};

FollowUsersEntry.propTypes = {
  user: React.PropTypes.object,
  followed: React.PropTypes.bool,
  handleFollowUser: React.PropTypes.func,
};

export default FollowUsersEntry;
