import { combineReducers } from 'redux';
import places from './placesReducer';
import auth from './authReducer';
import user from './userReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  places,
  auth,
  user,
  routing: routerReducer,
});

export default rootReducer;
