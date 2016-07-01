import initialState from './initialState';

export default function displayPlacesReducer(state = initialState.locate, action) {
  switch (action.type) {

    case 'LOAD_LOCATE': {
      return action.follows.map(follow => (
        Object.assign({}, follow, { showInfo: false })
      ));
    }

    case 'FILTER_LOCATE': {
      // action.follows, action.filter
      const filterItem = action.filter;
      const follows = action.follows;
      let result = follows.filter(place => typeof place.id === 'number' || filterItem);
      result = result.map(place => Object.assign({}, place, { showInfo: false }));
      return result;
    }

    case 'UPDATE_SHOWING_LOCATE': {
      const i = action.index;
      return state.map((follow, index) => {
        if (index === i) {
          return Object.assign({}, follow, {
            showInfo: !follow.showInfo,
          });
        }
        return follow;
      });
    }

    case 'HIDE_ALL_LOCATE': {
      return state.map(follow => (
          Object.assign({}, follow, {
            showInfo: false,
          })
      ));
    }

    default:
      return state;
  }
}
