import initialState from './initialState';

export default function favsReducer(state = initialState.favs, action) {
  switch (action.type) {
    case 'LOAD_FAVS': {
      const userPlaceIds = Object.keys(action.data).map((key) => action.data[key].userPlaceId);
      console.log('Loading Favs userPlaceIds...', userPlaceIds);
      return userPlaceIds;
    }

    case 'ADD_FAV': {
      console.log('Adding new userPlaceId to Favs...', action.userPlaceId);
      return [...state, action.userPlaceId];
    }

    default:
      return state;
  }
}
