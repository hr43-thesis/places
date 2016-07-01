import axios from 'axios';

const serverUrl = `${process.env.PROTOCOL}${process.env.BOT_SERVICE}:${process.env.BOT_PORT}`;

export function getBots() {
  return (dispatch) => {
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

export function startPosting(userId) {
  return (dispatch) => {
    const config = {
      url: `${serverUrl}/api/users/post`,
      method: 'POST',
      data: {
        userId,
        interval: 10000,
      },
      withCredentials: true,
    };


    axios(config)
    .then(({ status, data }) => {
      console.log(data);
      if (status === 200) {
        return dispatch({
          type: 'SET_POSTING',
          posting: data.posting,
          userId,
        });
      }
      return null;
    });
  };
}

export function stopPosting(userId) {
  return (dispatch) => {
    const config = {
      url: `${serverUrl}/api/users/post/stop`,
      method: 'POST',
      data: {
        userId,
        interval: 10000,
      },
      withCredentials: true,
    };


    axios(config)
    .then(({ status, data }) => {
      console.log(data);
      if (status === 200) {
        return dispatch({
          type: 'SET_POSTING',
          posting: data.posting,
          userId,
        });
      }
      return null;
    });
  };
}
