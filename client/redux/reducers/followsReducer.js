import initialState from './initialState';

export const followsReducer = (state = initialState.follows, action) => {
  console.log(action.user);
  switch (action.type) {
    case 'FOLLOW_USER':
      return [...state, action.user];

    default:
      return state;
  }
};
