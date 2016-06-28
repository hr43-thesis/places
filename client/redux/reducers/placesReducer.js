import initialState from './initialState';

export default function placesReducer(state = initialState.places, action) {
  switch (action.type) {
    case 'LOAD_PLACES':
      return action.places;

    case 'GET_FOLLOW_PLACES':
      return [...state, ...action.places];

    default:
      return state;
  }
}
