import initialState from './initialState';

export default function authReducer(state = initialState.bots, action) {
  switch (action.type) {
    case 'SET_BOTS':
      return action.bots;

    default:
      return state;
  }
}
