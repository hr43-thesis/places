import initialState from './initialState';

export const displayUsersReducer = (state = initialState.displayUsers, action) => {
  console.log(action.displayUsers);
  switch (action.type) {
    case 'SEARCH_USER':
      return state;

    default:
      return state;
  }
};
