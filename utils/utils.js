import axios from 'axios';

exports.followUser = (userId, followedId, callback) => {
  axios({
    url: `/api/users/${userId}/follows`,
    method: 'post',
    baseURL: 'http://localhost:7000/',
    withCredentials: true,
    data: {
      followedId,
    },
  })
  .then(response => {
    console.log('Got response back from server.');
    return callback(response);
  })
  .catch(error => {
    console.log(error);
  });
};
