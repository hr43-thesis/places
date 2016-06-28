import initialState from './initialState';

export default function usersReducer(state = initialState.users, action) {
  let index;
  switch (action.type) {
    case 'LOAD_USERS':
      return action.users;

    case 'REMOVE_FOLLOWED_USER':
      state.forEach((user, i) => {
        if (user.id === action.followedId) {
          index = i;
        }
      });
      return [...state.slice(0, index), ...state.slice(index + 1)];

    default:
      return state;
  }
}
