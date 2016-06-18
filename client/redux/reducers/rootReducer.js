import { combineReducers } from 'redux';
import places from './placesReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  places,
  routing: routerReducer,
});

export default rootReducer;
