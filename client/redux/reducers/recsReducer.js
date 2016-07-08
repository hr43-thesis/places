import initialState from './initialState';

export default function recsReducer(state = initialState.recs, action) {
  switch (action.type) {
    case 'DISPLAY_RECS':
      return [...action.recs];

    default:
      return state;
  }
}
