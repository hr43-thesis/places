import initialState from './initialState';

export default function displayPlacesReducer(state = initialState.locate, action) {
  switch (action.type) {

    case 'LOAD_LOCATE': {
      // filter displayPlaces to exclude user's own
      // action.follows
      const userId = action.userId;
      const places = action.places;
      const displayPlaces = places.filter((place) => place.userId !== userId);
      return displayPlaces;
    }

    case 'FILTER_LOCATE': {
      // action.follows, action.filter
      const filterItem = action.filter;
      const follows = action.follows;
      let result = follows.filter(place => typeof place.id === 'number' || filterItem);
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