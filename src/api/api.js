import axios from "axios";
import { getApiEnv } from "api/env";
import { getRefreshToken, getAccessToken, setTokens } from 'helpers/save_tokens';
import { logout } from 'helpers/session';

class Api {
  constructor() {
    const env = getApiEnv(); // Get api settings
    this.env = env;

    /**
     * Function create axios query configuration and add request and response interceptors.
     * For request add access token to headers.
     * In response - check if 401 status(unauthorized) try to refresh access token. If bad refresh - logout.
     * @param {string} url - The user role.
     * @param {string} contentType - The user role.
     * @param {boolean} isPublic - The user role.
     */
    const getClient = ({ url, contentType = "application/json", isPublic = false }) => {
      const client = axios.create({
        baseURL: url,
        headers: {
          Accept: "*/*",
          "Content-Type": contentType,
        },
      });

      client.interceptors.response.use(
        (response) => response.data,
        async function (error) {
          // If the error is not related to authorization -> return error
          if (error.response.status !== 401) return Promise.reject(error.response);

          // 401 Unauthorized status code
          // If refreshToken is empty -> logout
          if (!getRefreshToken()) {
            logout();
            return Promise.reject(error.response);
          }

          const originalRequest = {
            method: error.config.method,
            baseURL: error.config.baseURL,
            url: error.config.url,
            data: error.config.data,
            headers: {},
          };

          // Try to refresh access token
          if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
              console.log("Trying to refresh token");

              // Get new access token
              const resp = await axios.put(env.adminSessionAppName, {
                refreshToken: `${getRefreshToken()}`,
              });

              // Set new auth data to storage
              const { data } = resp.data;
              setTokens(data);

              // Add new access token to request headers
              originalRequest.headers["Authorization"] = "Bearer " + data.accessToken;

              // Return previous request with new access token
              return client(originalRequest);
            } catch (_error) {
              // If an error occurred during the update token -> logout
              logout();
              return Promise.reject(_error.response);
            }
          }
        }
      );

      // If public client
      if (isPublic) return client;

      // Set Authorization header if has access and refresh tokens
      client.interceptors.request.use(async (config) => {
        if (getAccessToken() && getRefreshToken()) {
          config.headers.Authorization = `Bearer ${getAccessToken()}`;
        }
        return config;
      });

      return client;
    };

    // For requests that do NOT REQUIRE authorization
    this.public_client = getClient({ url: env.baseApiUrl, isPublic: true });

    // For requests that REQUIRE authorization
    this.authorized_client = getClient({ url: env.baseApiUrl });

    // For requests that REQUIRE authorization and multipart data
    this.multipart_client = getClient({
      url: env.baseApiUrl,
      contentType: "multipart/form-data",
    });
  };

  admin_session = {
    login: (data) => this.public_client.post(this.env.adminSessionAppName, data),
    refreshToken: (data) => this.public_client.put(this.env.adminSessionAppName, data),
    clearToken: () => this.authorized_client.delete(this.env.adminSessionAppName),
  };

  admin_user = {
    retrieveUsersInPagination: (params) => this.authorized_client.get(this.env.adminUsersAppName, { params }),
    retrieveUsersInCursorPagination: (params) => this.authorized_client.get(this.env.adminUsersAppName, { params }),
    deleteUser: (id) => this.authorized_client.delete(this.env.adminUsersAppName + `/${id}`)
  };

  admin_post = {
    createPost: (data) => this.authorized_client.post(this.env.adminPostAppName, data),
    updatePost: (id, data) => this.authorized_client.post(this.env.adminPostAppName + `/${id}`, data),
    deletePost: (id) => this.authorized_client.delete(this.env.adminPostAppName + `/${id}`)
  };

  user_session = {
    login: (data) => this.public_client.post(this.env.sessionAppName, data),
    refreshToken: (data) => this.public_client.put(this.env.sessionAppName, data),
    clearToken: () => this.authorized_client.delete(this.env.sessionAppName),

    signup: (data) => this.public_client.post('/users', data)
  };

  post = {
    getAllPosts: () => this.public_client.get(this.env.postAppName + '/getall'),
    getPost: (id) => this.public_client.get(this.env.postAppName + `/${id}`),

    likePost: (id) => this.authorized_client.get(`/like/${id}`)
  };

  comment = {
    createComment: (data) => this.authorized_client.post(this.env.commentAppName, data),
    deleteComment: (data) => this.authorized_client.delete(this.env.commentAppName, data),
    createAnswer: (id, data) => this.authorized_client.post(this.env.commentAppName + `/${id}`, data),
    deleteAnswer: (id) => this.authorized_client.delete(this.env.commentAppName + `/${id}`),
  };

  roadmap = {
    getAllRoadmaps: () => this.public_client.get(this.env.roadmapAppName),
    createRoadmap: (data) => this.authorized_client.post(this.env.roadmapAppName, data),
    getRoadmap: (id) => this.public_client.get(this.env.roadmapAppName + `/${id}`),
    updateRoadmap: (id, data) => this.multipart_client.put(this.env.roadmapAppName + `${id}`, data),
    deleteRoadmap: (id) => this.authorized_client.delete(this.env.roadmapAppName + `/${id}`)
  };

  vacancies = () => this.public_client.get('/vacansies');

  retrieveAdministratorsInPagination = (params) => this.authorized_client.get('/superadmin/admins', { params });

  verificationsEmail = (token) => this.authorized_client.get(`/verifications/email?token=${token}`);
}

const api = new Api();

export default api;
