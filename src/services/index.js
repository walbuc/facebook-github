import axios from 'axios';

const ROOT_URL = `https://api.github.com`;
const ORG = 'facebook';

export const fetchRepositories = () => {
  const res = axios.get(`${ROOT_URL}/orgs/${ORG}/repos`);
  return res;
};

export const fetchDetails = async (name, id) => {
  const res = await axios.get(
    `${ROOT_URL}/repos/facebook/${name}/contributors`
  );
  return res;
};
