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

export function starPlace(userId, placeId, userPlaceId) {
  console.log('called starPlace with userId, placeId: ', userId, placeId, userPlaceId);
  return (dispatch) => {
    axios.post(`http://localhost:7000/api/users/${userId}/favs`, {
      withCredentials: true,
      placeId,
      userPlaceId,
    })
    .then((response) => {
      console.log(response);
      if (response.status === 201) {
        return dispatch({
          type: 'STAR_PLACE',
          userPlaceId,
        });
      }
      return null;
    });
  };
}
