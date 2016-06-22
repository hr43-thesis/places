import initialState from './initialState';

export default function followReducer(state = initialState.users, action) {
  switch (action.type) {
    case 'FOLLOW_USER':
      return action.users;

    default:
      return state;
  }
}
