export const searchUser = (user) => ({
  type: 'SEARCH_USER',
  user,
});

export const followUser = (user) => ({
  type: 'FOLLOW_USER',
  user,
});
