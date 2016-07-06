import axios from 'axios';

const serverUrl = `${process.env.PROTOCOL}${process.env.HOST}:${process.env.PORT}`;

export function loadFavs(userId) {
  return (dispatch) => {
    axios.get(`${serverUrl}/api/users/${userId}/favs`, { withCredentials: true })
    .then((response) => {
      if (response.status === 200) {
        return dispatch({
          type: 'LOAD_FAVS',
          data: response.data,
        });
      }
      return null;
    });
  };
}

export function addFav(userId, placeId, userPlaceId) {
  return (dispatch) => {
    axios.post(`${serverUrl}/api/users/${userId}/favs`, {
      withCredentials: true,
      placeId,
      userPlaceId,
    })
    .then((response) => {
      if (response.status === 201) {
        return dispatch({
          type: 'ADD_FAV',
          userPlaceId,
        });
      }
      return null;
    });
  };
}
