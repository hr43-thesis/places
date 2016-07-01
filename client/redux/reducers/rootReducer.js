import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import places from './placesReducer';
import isAuth from './authReducer';
import user from './userReducer';
import users from './usersReducer';
import follows from './followsReducer';
import favs from './favsReducer';
import displayPlaces from './displayPlacesReducer';
import displayUsers from './displayUsersReducer';
import locate from './locateReducer';
import isAdmin from './adminReducer';

const rootReducer = combineReducers({
  places,
  displayPlaces,
  user,
  follows,
  favs,
  isAuth,
  isAdmin,
  users,
  displayUsers,
  locate,
  routing: routerReducer,
});

export default rootReducer;
