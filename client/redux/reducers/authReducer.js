import initialState from './initialState';

export default function authReducer(state = initialState.isAuth, action) {
  switch (action.type) {
    case 'SET_AUTH':
      console.log('in reducer: ', action);
      return action.isAuth;

    default:
      return state;
  }
}

