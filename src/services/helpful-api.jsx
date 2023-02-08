import { developmentInstance } from 'api';

const getHelpfuls = () => {
  return developmentInstance.get().then(response => {
    return response.data;
  });
};
export default getHelpfuls;
