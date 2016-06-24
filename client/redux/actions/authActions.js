import axios from 'axios';
import { push } from 'react-router-redux';
import { loadUser } from './userActions';

export function setAuth(fbToken) {
  let userData;
  return (dispatch) => {
    axios.get(`http://localhost:7000/auth/facebook/token?access_token=${fbToken}`, { withCredentials: true })
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
        console.log('before reducer:', userData);
        dispatch(loadUser(userData));
        dispatch(push('/'));
      }
    });
  };
}

export function handleLogout() {
  console.log('called logout');
  return (dispatch) => {
    axios.get('http://localhost:7000/logout', { withCredentials: true })
    .then((data) => {
      console.log(data);
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
