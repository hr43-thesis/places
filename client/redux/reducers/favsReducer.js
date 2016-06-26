import initialState from './initialState';

export default function favsReducer(state = initialState.favs, action) {
  switch (action.type) {
    case 'SET_FAVS': {
      return action.data;
    }

    default:
      return state;
  }
}
