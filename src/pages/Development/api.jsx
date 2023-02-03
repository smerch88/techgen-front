import axios from 'axios';
const BASE_URL = `https://63da6331b28a3148f685e7c7.mockapi.io/api/v1/developments`;
const getDevelopments = () => {
  return axios.get(`${BASE_URL}`).then(response => {
    return response.data;
  });
};
export default getDevelopments;
