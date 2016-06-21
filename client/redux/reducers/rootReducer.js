import { combineReducers } from 'redux';
import places from './placesReducer';
import auth from './authReducer';
import user from './userReducer';
import users from './usersReducer';
import follows from './followsReducer';
import favs from './favsReducer';
import displayPlaces from './displayPlacesReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  places,
  displayPlaces,
  user,
  follows,
  favs,
  auth,
  users,
  routing: routerReducer,
});

export default rootReducer;
