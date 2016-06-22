import axios from 'axios';

export const followUser = (userId) => {
  axios.post(`/api/users/${userId}/follows`, {
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
