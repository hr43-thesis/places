import axios from 'axios';
import { updateDisplayUsers } from './displayUsersActions';

const serverUrl = `${process.env.PROTOCOL}${process.env.HOST}:${process.env.PORT}`;

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
    axios.get(`${serverUrl}/api/users`, { withCredentials: true })
    .then(({ data }) => {
      console.log(data);
      dispatch(updateUsers(data));
      dispatch(updateDisplayUsers(data));
    });
}
