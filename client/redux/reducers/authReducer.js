import initialState from './initialState';

export default function authReducer(state = initialState.isAuth, action) {
  switch (action.type) {
    case 'SET_AUTH':
      return action.isAuth;

    default:
      return state;
  }
}

