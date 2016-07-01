import initialState from './initialState';
import _ from 'lodash';

export default function authReducer(state = initialState.bots, action) {
  const botIndx = _.findIndex(state, bot => bot.id === action.userId);
  // console.log(action);
  // console.log(botIndx);
  const update = { ...state[botIndx], posting: action.posting };
  const newState = [...state];
  newState[botIndx] = update;
  // console.log(update);
  // console.log(newState);
  switch (action.type) {
    case 'SET_BOTS':
      return action.bots;

    case 'SET_POSTING':
      return newState;

    default:
      return state;
  }
}
