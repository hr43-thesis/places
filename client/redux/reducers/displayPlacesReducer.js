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

    case 'FILTER_PLACES': {
      const filterItem = action.filter;
      const places = action.places;
      let result = places.filter(place => typeof place.id === 'number' || filterItem);
      result = result.map(place => Object.assign({}, place, { showInfo: false }));
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
