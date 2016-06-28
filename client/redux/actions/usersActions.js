import axios from 'axios';
import { updateDisplayUsers } from './displayUsersActions';

export function updateUsers(users) {
  return {
    type: 'LOAD_USERS',
    users,
  };
}

export function removeFollowedUser(followedId) {
  return {
    type: 'REMOVE_FOLLOWED_USER',
    followedId,
  };
}

export function fetchUsers() {
  return (dispatch) =>
    axios.get('http://localhost:7000/api/users', { withCredentials: true })
    .then(({ data }) => {
      console.log(data);
      dispatch(updateUsers(data));
      dispatch(updateDisplayUsers(data));
    });
}
