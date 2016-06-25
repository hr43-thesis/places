import initialState from './initialState';

export default function displayPlacesReducer(state = initialState.displayPlaces, action) {
  switch (action.type) {

    case 'FILTER_PLACES': {
      console.log('ABOUT TO LAUNCH FILTER_PLACES');
      console.log('state is: ', state);
      console.log('action is: ', action);
      const filterItem = action.filter;
      const places = action.places;
      let result = places.filter(place => typeof place.id === 'number' || filterItem);
      result = result.map(place => Object.assign({}, place, { showInfo: false }));
      console.log('result with assgin is: result', result);
      return result;
    }

    case 'UPDATE_SHOWING': {
      console.log('ABOUT TO UPDATE_SHOWING');
      console.log('state is: ', state);
      console.log('action is: ', action);
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
