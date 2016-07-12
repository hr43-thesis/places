import axios from 'axios';

const serverUrl = `${process.env.PROTOCOL}${process.env.BOT_SERVICE}:${process.env.BOT_PORT}`;

export function addBot(type, location, origin, destination) {
  return (dispatch) => {
    const config = {
      url: `${serverUrl}/api/users/create`,
      method: 'POST',
      data: {
        interval: 10000,
        type,
        location,
        origin,
        destination,
      },
      withCredentials: true,
    };


    axios(config)
    .then(({ status, data }) => {
      if (status === 200) {
        return dispatch({
          type: 'ADD_BOT',
          bot: data,
        });
      }
      return null;
    });
  };
}

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
  };
}

export function startPosting(userId, location) {
  return (dispatch) => {
    const config = {
      url: `${serverUrl}/api/users/post`,
      method: 'POST',
      data: {
        userId,
        location,
        interval: 10000,
      },
      withCredentials: true,
    };


    axios(config)
    .then(({ status, data }) => {
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
      if (status === 200) {
        return dispatch({
          type: 'SET_POSTING',
          posting: data.posting,
          moving: null,
          userId,
        });
      }
      return null;
    });
  };
}

export function startMoving(userId) {
  return (dispatch) => {
    const config = {
      url: `${serverUrl}/api/users/walk`,
      method: 'POST',
      data: {
        userId,
        interval: 10000,
      },
      withCredentials: true,
    };


    axios(config)
    .then(({ status, data }) => {
      if (status === 200) {
        return dispatch({
          type: 'SET_MOVING',
          moving: data.moving,
          posting: null,
          userId,
        });
      }
      return null;
    });
  };
}

export function stopMoving(userId) {
  return (dispatch) => {
    const config = {
      url: `${serverUrl}/api/users/walk/stop`,
      method: 'POST',
      data: {
        userId,
      },
      withCredentials: true,
    };


    axios(config)
    .then(({ status, data }) => {
      if (status === 200) {
        return dispatch({
          type: 'SET_MOVING',
          moving: data.moving,
          posting: null,
          userId,
        });
      }
      return null;
    });
  };
}
