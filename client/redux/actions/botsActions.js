import axios from 'axios';

const serverUrl = `${process.env.PROTOCOL}${process.env.BOT_SERVICE}:${process.env.BOT_PORT}`;

export function getBots() {
  return (dispatch) => {
    console.log('getting bots?');
    axios.get(`${serverUrl}/api/users`, { withCredentials: true })
    .then(({ status, data }) => {
      if (status === 200) {
        return dispatch({
          type: 'SET_BOTS',
          bots: data,
        });
      }
      return null;
    });
  //   .then((action) => {
  //     if (action.type === 'SET_AUTH') {
  //       dispatch(loadUser(userData));
  //       dispatch(push('/'));
  //     }
  //   });
  };
}
