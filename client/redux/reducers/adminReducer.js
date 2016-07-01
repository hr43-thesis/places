import initialState from './initialState';

export default function adminReducer(state = initialState.isAdmin, action) {
  switch (action.type) {
    case 'SET_ADMIN':
      return action.isAdmin;

    default:
      return state;
  }
}
