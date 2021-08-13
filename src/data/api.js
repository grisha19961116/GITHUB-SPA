const axios = require('axios');
axios.defaults.baseURL = 'https://api.github.com/users';

const getAllRepositories = async name => {
  const { data } = await axios.get(`/${name}/repos`);
  return data;
};

export { getAllRepositories };
