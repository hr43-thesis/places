import initialState from './initialState';

export default function displayUsersReducer(state = initialState.displayUsers, action) {
  switch (action.type) {
    case 'SEARCH_USER':
      return state;

    default:
      return state;
  }
}
