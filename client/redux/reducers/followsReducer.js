import initialState from './initialState';

export default function followsReducer(state = initialState.follows, action) {
  switch (action.type) {
    case 'FOLLOW_USER':
      return [...state, action.user];

    case 'GET_FOLLOWS':
      return action.follows;

    default:
      return state;
  }
}
