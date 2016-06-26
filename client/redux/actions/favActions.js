import axios from 'axios';

export function setFavs(userId) {
  console.log('called setFavs with userId: ', userId);
  return (dispatch) => {
    axios.get(`http://localhost:7000/api/users/${userId}/favs`, { withCredentials: true })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        return dispatch({
          type: 'SET_FAVS',
          data: response.data,
        });
      }
      return null;
    });
  };
}
