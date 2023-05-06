import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import { USER_ROLES } from 'helpers/roles';

/**
 * - If the route is restricted and the user does not have the required role, then render a <Navigate> to redirectTo
 * - Otherwise render the component
 */
export const RestrictedRoute = ({
                                  component: Component,
                                  roles = [USER_ROLES.admin],
                                  redirectTo = '/',
                                }) => {
  const { isAuthorized, user } = useAuth();
  const hasPermission = isAuthorized && user && roles.includes(user?.role);
  return !hasPermission ? <Navigate to={redirectTo} /> : Component;
};
