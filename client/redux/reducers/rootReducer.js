import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import places from './placesReducer';
import auth from './authReducer';
import user from './userReducer';
import users from './usersReducer';
import follows from './followsReducer';
import favs from './favsReducer';
import displayPlaces from './displayPlacesReducer';
import displayUsers from './displayUsersReducer';
import locate from './locateReducer';

const rootReducer = combineReducers({
  places,
  displayPlaces,
  user,
  follows,
  favs,
  auth,
  users,
  displayUsers,
  locate,
  routing: routerReducer,
});

export default rootReducer;
