import { clearTokens, getAccessToken, getRefreshToken, setTokens } from 'helpers/save_tokens';
import store from 'redux/store';
import { signOut } from 'redux/auth/sliceAuth';
import jwt_decode from 'jwt-decode';
import { history } from 'helpers/history';
import api from 'api/api';

/**
 * Clears tokens and user data and navigates to a specified path (optional).
 * @param {string} path - The path to navigate to after clearing tokens and user data.
 */
export function logout(path) {
  clearTokens();
  store.dispatch(signOut());

  if(path) {
    history.navigate(path);
  }
}

/**
 * Checks the current session, i.e. token validity. If tokens are present but expire soon, attempts to refresh them.
 */
export async function checkSession() {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  // Check if both access and refresh tokens are present
  if (!accessToken || !refreshToken) {
    console.error("undefined tokens");
    return logout();
  }

  // Get the expiration time of the access token
  const accessTokenExp = getAccessTokenExp(accessToken);
  const _now = Math.floor(new Date().getTime() / 1000);

  console.log(`token - ${accessTokenExp  - 7200} | now - ${_now}`);

  // If the token is about to expire within 2 hours, attempt to refresh it
  if (accessTokenExp - 7200 < _now) {
    console.warn(`token - expired`);

    try {
      const resp = await api.admin_session.refreshToken({ refreshToken });
      setTokens(resp.data);
      console.log('refresh successful');
    } catch (error) {
      console.error(error);
      return logout();
    }
  }
}

function getAccessTokenExp(token) {
  try {
    const { exp } = jwt_decode(token);
    return exp;
  } catch (err) {
    console.error(err.message);
    return null;
  }
}
