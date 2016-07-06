import initialState from './initialState';

export default function displayPlacesReducer(state = initialState.displayPlaces, action) {
  switch (action.type) {

    case 'LOAD_DISPLAY_PLACES': {
      // filter displayPlaces to exclude user's own
      const userId = action.userId;
      const places = action.places;
      const displayPlaces = places.filter((place) => place.userId !== userId);
      return displayPlaces;
    }

    case 'CLEAR_DISPLAY': {
      console.log('clearing');
      return [];
    }

    case 'FILTER_PLACES': {
      // myplaces - places are userId and userPlacesId
      const filterItem = action.filter;
      const places = action.places;
      const userId = action.userId;
      let result;
      if (filterItem === 'Pinned') {
        result = places.filter(place => (
          place.userId === userId
        ));
        result = result.map(place => Object.assign({}, place, { showInfo: false }));
      } else if (filterItem === 'Starred') {
        // check if a user has fav'ed a place
        result = places.filter(place => action.favs.indexOf(place.userPlaceId) !== -1);
        result = result.map(place => Object.assign({}, place, { showInfo: false }));
      }
      return result;
    }

    case 'UPDATE_SHOWING': {
      const i = action.index;
      return state.map((place, index) => {
        if (index === i) {
          return Object.assign({}, place, {
            showInfo: !place.showInfo,
          });
        }
        return place;
      });
    }

    case 'HIDE_ALL': {
      return state.map(place => (
          Object.assign({}, place, {
            showInfo: false,
          })
      ));
    }

    default:
      return state;
  }
}
