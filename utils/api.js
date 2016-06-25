import axios from 'axios';
// temp serverURL until env props are created
const serverUrl = 'http://localhost:7000';
const api = {
  followUser(userId, followedId) {
    return axios({
      url: `/api/users/${userId}/follows`,
      method: 'post',
      baseURL: serverUrl,
      withCredentials: true,
      data: {
        followedId,
      },
    });
  },
  getFollows(userId) {
    return axios({
      url: `/api/users/${userId}/follows`,
      method: 'get',
      baseURL: serverUrl,
      withCredentials: true,
    });
  },
};

export default api;
