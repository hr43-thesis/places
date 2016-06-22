import initialState from './initialState';

export default function displayUsersReducer(state = initialState.displayUsers, action) {
  let displayUsers = [];
  console.log(action.user);
  switch (action.type) {
    case 'SEARCH_USER':
      if (!action.user) {
        displayUsers = initialState.displayUsers;
      } else {
        // Bug: need to set to prev state when user has typo
        state.forEach((user) => {
          if (user.name.includes(action.user)) {
            displayUsers.push(user);
          }
        });
      }
      return displayUsers;

    default:
      return state;
  }
}
