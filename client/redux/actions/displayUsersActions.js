export function updateDisplayUsers(users) {
  return {
    type: 'UPDATE_DISPLAY_USERS',
    users,
  };
}

export function combineUsers() {
  return {
    type: 'COMBINE_USERS',
  };
}
