import initialState from './initialState';

export default function followsReducer(state = initialState.follows, action) {
  switch (action.type) {
    case 'FOLLOW_USER':
      return [...state, action.user];

    case 'GET_FOLLOWS':
      return action.follows;

    case 'UPDATE_FOLLOWS_LOCATION': {
      console.log('inside update follows!!!---------');
      return state.map(follow => (
        Object.assign({}, follow, action.data[follow.id])
      ));
    }

    default:
      return state;
  }
}
