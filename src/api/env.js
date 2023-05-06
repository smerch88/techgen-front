export const getApiEnv = () => {
  // Different settings between dev and prod version
  const config = {
    production: {},
    development: {
      SERVER_NAME: "143.244.128.106:4200",
      SERVER_PROTOCOL: "http",
    },
  };

  // Get settings based on dev/prod version
  const { SERVER_NAME, SERVER_PROTOCOL } = config['development'];

  const baseUrl = `${SERVER_PROTOCOL}://${SERVER_NAME}`;
  const baseApiUrl = `${baseUrl}/api/v1`;

  return {
    baseApiUrl,
    adminSessionAppName: `${baseApiUrl}/admin-sessions`,
    adminUsersAppName: `${baseApiUrl}/admin-users`,
    adminPostAppName: `${baseApiUrl}/adminpost`,
    sessionAppName: `${baseApiUrl}/sessions`,
    postAppName: `${baseApiUrl}/post`,
    roadmapAppName: `${baseApiUrl}/roadmap`,
    commentAppName: `${baseApiUrl}/comment`,
  };
};
