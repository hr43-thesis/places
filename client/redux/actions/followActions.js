import axios from 'axios';

export const searchUser = (user) => ({
  type: 'SEARCH_USER',
  user,
});

export const followUser = (user) => ({
  type: 'FOLLOW_USER',
  user,
});

export const getFollows = (follows) => ({
  type: 'GET_FOLLOWS',
  follows,
});

export const getFollowPlaces = (places) => ({
  type: 'GET_FOLLOW_PLACES',
  places,
});

export function getLocationInfo() {
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
};

