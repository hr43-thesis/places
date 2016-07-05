import initialState from './initialState';

export default function botsListReducer(state = initialState.botsList, action) {
  switch (action.type) {
    case 'TOGGLE_SELECT':
      return { ...state, ...action.botType };

    default:
      return state;
  }
}
