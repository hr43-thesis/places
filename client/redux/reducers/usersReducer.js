import initialState from './initialState';

export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    case 'LOAD_USERS':
      return action.users;

    default:
      return state;
  }
}
