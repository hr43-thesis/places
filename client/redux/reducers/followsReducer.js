import initialState from './initialState';

export default function followsReducer(state = initialState.follows, action) {
  switch (action.type) {
    case 'FOLLOW_USER':
      return [...state, action.user];

    default:
      return state;
  }
}
