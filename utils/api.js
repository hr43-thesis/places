import axios from 'axios';

const api = {
  followUser(userId, followedId) {
    return axios({
      url: `/api/users/${userId}/follows`,
      method: 'post',
      baseURL: 'http://localhost:7000/',
      withCredentials: true,
      data: {
        followedId,
      },
    });
  },
};

export default api;
