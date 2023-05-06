import { useSelector } from 'react-redux';
import {
  selectIsAuthorized,
  selectUser,
} from 'redux/auth/selectorsAuth';

export const useAuth = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  const user = useSelector(selectUser);

  return {
    isAuthorized,
    user,
  };
};
