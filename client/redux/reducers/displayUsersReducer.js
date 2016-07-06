import initialState from './initialState';
import { store } from '../../client';

export default function displayUsersReducer(state = initialState.users, action) {
  let displayUsers = [];
  let allUsers = [];
  if (store) {
    allUsers = [...store.getState().users, ...store.getState().follows];
  }

  switch (action.type) {
    case 'SEARCH_USER':
      if (action.user) {
        allUsers.forEach((user) => {
          if (user.name.toLowerCase().includes(action.user.toLowerCase())) {
            displayUsers.push(user);
          }
        });
      } else {
        displayUsers = allUsers;
      }
      return displayUsers;

    case 'UPDATE_DISPLAY_USERS':
      return action.users;

    case 'COMBINE_USERS':
      return allUsers;

    default:
      return state;
  }
}
