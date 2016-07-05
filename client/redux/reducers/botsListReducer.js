import initialState from './initialState';

export default function botsListReducer(state = initialState.botsList, action) {
  switch (action.type) {
    case 'TOGGLE_SELECT':
      return { ...state, ...action.botType };

    case 'POST_CENTER':
      return { ...state, ...action.center };

    case 'POST_ORIGIN':
      return { ...state, ...action.origin };

    case 'POST_DESTINATION':
      return { ...state, ...action.destination };

    default:
      return state;
  }
}
