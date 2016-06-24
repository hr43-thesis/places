import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case 'LOAD_USER':
      console.log('in user reducer: ', action);
      return { ...action.user, ...action.data };

    default:
      return state;
  }
}
