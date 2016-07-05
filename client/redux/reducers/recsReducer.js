import initialState from './initialState';

export default function recsReducer(state = initialState.recs, action) {
  switch (action.type) {
    case 'DISPLAY_RECS':
      return [...state, ...action.recs];

    default:
      return state;
  }
}
