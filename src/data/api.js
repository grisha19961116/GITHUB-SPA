const axios = require('axios');
axios.defaults.baseURL = 'https://api.github.com/repos';

const getAllRepositories = async (githubName, repositoryName) => {
  const { data } = await axios.get(`/${githubName}/${repositoryName}`);
  return data;
};

export { getAllRepositories };
