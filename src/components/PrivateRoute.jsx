import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */
export const PrivateRoute = ({
                               component: Component,
                               redirectTo = '/sign-in',
                             }) => {
  const { isAuthorized } = useAuth();
  return !isAuthorized ? <Navigate to={redirectTo} /> : Component;
};
