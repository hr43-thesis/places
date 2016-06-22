import axios from 'axios';
import { push } from 'react-router-redux';

export function setAuth(fbToken) {
  console.log('called', fbToken);
  return (dispatch) => {
    axios.get(`http://localhost:7000/auth/facebook/token?access_token=${fbToken}`, { withCredentials: true })
    .then((data) => {
      console.log(data);
      if (data.status === 200) {
        return dispatch({
          type: 'SET_AUTH',
          isAuth: true,
        });
      }
      return null;
    })
    .then((action) => {
      console.log(action);
      if (action.type === 'SET_AUTH') {
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
