import axios from 'axios';

const serverUrl = `${process.env.PROTOCOL}${process.env.HOST}:${process.env.PORT}`;

export const searchUser = (user) => ({
  type: 'SEARCH_USER',
  user,
});

export const followUser = (user) => ({
  type: 'FOLLOW_USER',
  user,
});

export const unfollowUser = (followedId) => ({
  type: 'UNFOLLOW_USER',
  followedId,
});

export const getFollows = (follows) => ({
  type: 'GET_FOLLOWS',
  follows,
});

export const getFollowPlaces = (places) => ({
  type: 'GET_FOLLOW_PLACES',
  places,
});

export const removeFollowPlaces = (followedId) => ({
  type: 'REMOVE_FOLLOW_PLACES',
  followedId,
});

export function getLocationInfo(follows) {
  // might need to modify follows
  const basicFollows = follows.map(person => person.id);
  return (dispatch) => {
    axios.post(`${serverUrl}/api/locate`, {
      withCredentials: true,
      basicFollows,
    })
    .then((response) => {
      if (response.status === 200) {
        return dispatch({
          type: 'UPDATE_FOLLOWS_LOCATION',
          data: response.data,
        });
      }
      return null;
    });
  };
}

