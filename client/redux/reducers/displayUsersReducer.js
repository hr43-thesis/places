import initialState from './initialState';

const indexOf = (allUsers, currUser) => {
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].id === currUser.id) {
      return i;
    }
  }
  return -1;
};

const removeCurrUser = (allUsers, user) => {
  const index = indexOf(allUsers, user);
  if (index > -1) {
    allUsers.splice(index, 1);
  }
  return allUsers;
};

export default function displayUsersReducer(state = initialState.users, action) {
  let displayUsers = [];
  const allUsers = removeCurrUser(initialState.users, initialState.user);
  switch (action.type) {
    case 'SEARCH_USER':
      if (action.user) {
        allUsers.forEach((user) => {
          if (user.name.includes(action.user)) {
            displayUsers.push(user);
          }
        });
      } else {
        displayUsers = allUsers;
      }
      return displayUsers;

    default:
      return state;
  }
}
