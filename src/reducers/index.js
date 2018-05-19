import { combineReducers } from 'redux';
import repoReducer from './repositories_reducer';

export default combineReducers({
  repositories: repoReducer
});
