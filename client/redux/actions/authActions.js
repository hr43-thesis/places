import axios from 'axios';
import { push } from 'react-router-redux';
import { loadUser } from './userActions';

const serverUrl = `${process.env.PROTOCOL}${process.env.HOST}:${process.env.PORT}`;

export function setAuth(fbToken) {
  let userData;
  return (dispatch) => {
    axios.get(`${serverUrl}/auth/facebook/token?access_token=${fbToken}`, { withCredentials: true })
    .then(({ status, data }) => {
      userData = data;
      if (status === 200) {
        return dispatch({
          type: 'SET_AUTH',
          isAuth: true,
        });
      }
      return null;
    })
    .then((action) => {
      if (action.type === 'SET_AUTH') {
        dispatch(loadUser(userData));
        dispatch(push('/'));
      }
    });
  };
}

export function handleLogout() {
  return (dispatch) => {
    axios.get(`${serverUrl}/logout`, { withCredentials: true })
    .then((data) => {
      if (data.status === 200) {
        // window.FB.logout();
        return dispatch({
          type: 'SET_AUTH',
          isAuth: false,
        });
      }
      return null;
    });
    // .then((action) => {
    //   console.log(action);
    //   if (action.type === 'SET_AUTH') {
    //     dispatch(push('/'));
    //   }
    // });
  };
}
