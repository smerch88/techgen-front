import { developmentInstance } from 'api';

const getDevelopments = () => {
  return developmentInstance.get().then(response => {
    return response.data;
  });
};
export default getDevelopments;
