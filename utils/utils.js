import axios from 'axios';

exports.followUser = (userId) => {
  axios.post(`http://localhost:3000/api/users/${userId}/follows`, {
    userId,
  })
  .then(response => {
    console.log(response);
    console.log('followed');
    return response;
  })
  .catch(error => {
    console.log(error);
  });
};
