export function searchUser(user) {
  return { type: 'SEARCH_USER', user };
}

export function followUser(user) {
  return { type: 'FOLLOW_USER', user };
}
