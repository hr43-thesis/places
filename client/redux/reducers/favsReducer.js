import initialState from './initialState';

export default function favsReducer(state = initialState.favs, action) {
  switch (action.type) {
    case 'SET_FAVS': {
      return action.data;
    }

    case 'STAR_PLACE': {
      // add the placeId to the favs state as an object {displayPlaceId: action.id}
      return state;
    }

    default:
      return state;
  }
}
