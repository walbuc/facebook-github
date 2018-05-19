import { FETCH_REPOS_REQUESTED, FETCH_DETAILS_REQUESTED } from './types';

export const fetchRepositories = () => ({ type: FETCH_REPOS_REQUESTED });

export const fetchDetails = (name, id) => ({
  type: FETCH_DETAILS_REQUESTED,
  payload: { name, id }
});
