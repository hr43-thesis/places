import axios from 'axios';

export function updateUsers(users) {
  return {
    type: 'LOAD_USERS',
    users,
  };
}

export function fetchUsers() {
  return (dispatch) =>
    axios.get('http://localhost:7000/api/users', { withCredentials: true })
    .then(({ data }) => {
      dispatch(updateUsers(data));
    });
}
