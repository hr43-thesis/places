import axios from 'axios';

export function loadFavs(userId) {
  return (dispatch) => {
    axios.get(`http://localhost:7000/api/users/${userId}/favs`, { withCredentials: true })
    .then((response) => {
      console.log('Response in get req for Favs...', response);
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
    axios.post(`http://localhost:7000/api/users/${userId}/favs`, {
      withCredentials: true,
      placeId,
      userPlaceId,
    })
    .then((response) => {
      console.log('Response in post req to Favs...', response);
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
