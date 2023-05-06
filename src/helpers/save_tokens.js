export function getAccessToken() {
  const accessToken = document.cookie
    .split("; ")
    .find(row => row.startsWith("accessToken="))
    ?.split("=")[1];
  return accessToken ? JSON.parse(accessToken) : null;
}

export function getRefreshToken() {
  const refreshToken = document.cookie
    .split("; ")
    .find(row => row.startsWith("refreshToken="))
    ?.split("=")[1];
  return refreshToken ? JSON.parse(refreshToken) : null;
}

export function getExpireDate() {
  const expireDate = document.cookie
    .split("; ")
    .find(row => row.startsWith("expireDate="))
    ?.split("=")[1];
  return expireDate ? JSON.parse(expireDate) : null;
}

export function setTokens(data) {
  const accessToken = JSON.stringify(data["accessToken"]);
  const refreshToken = JSON.stringify(data["refreshToken"]);
  const expireDate = JSON.stringify(Math.floor(new Date(data["expireDate"]).getTime() / 1000));
  const expires = new Date(data["expireDate"]).toUTCString();

  document.cookie = `accessToken=${accessToken}; expires=${expires}; path=/`;
  document.cookie = `refreshToken=${refreshToken}; expires=${expires}; path=/`;
  document.cookie = `expireDate=${expireDate}; expires=${expires}; path=/`;
}

export function clearTokens() {
  document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "expireDate=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
