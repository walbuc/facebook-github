import mapKeys from 'lodash/mapKeys';
import {
  FETCH_REPOS_SUCCESS,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILED,
  FETCH_REPOS_FAILED
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        repos: { ...mapKeys(action.payload.repos, 'id') },
        error: '',
        selectedRepo: {
          ...action.payload.repos[0],
          contributors: { ...mapKeys(action.payload.contributors, 'id') }
        }
      };
    case FETCH_DETAILS_SUCCESS:
      const selectedRepo = {
        ...state.repos[action.payload.id],
        contributors: { ...mapKeys(action.payload.data, 'id') }
      };
      return { ...state, selectedRepo, error: '' };
    case FETCH_REPOS_FAILED:
      return {
        ...state,
        error: action.message
      };
    case FETCH_DETAILS_FAILED:
      return { ...state, error: action.message };
    default:
      return state;
  }
}
