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
