import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as Api from '../services';

function* fetchRepos() {
  try {
    const { data } = yield call(Api.fetchRepositories);
    const details = yield call(Api.fetchDetails, data[0].name);

    yield put({
      type: 'FETCH_REPOS_SUCCESS',
      payload: { repos: data, contributors: details.data }
    });
  } catch (e) {
    yield put({
      type: 'FETCH_REPOS_FAILED',
      message: e.message || 'Something went wrong'
    });
  }
}

function* fetchDetails(action) {
  try {
    const { payload: { name, id } } = action;
    const { data } = yield call(Api.fetchDetails, name, id);
    yield put({ type: 'FETCH_DETAILS_SUCCESS', payload: { id, data } });
  } catch (e) {
    yield put({
      type: 'FETCH_DETAILS_FAILED',
      message: e.message || 'Something went wrong'
    });
  }
}

function* fetchDetailsWatcher() {
  yield takeLatest('FETCH_DETAILS_REQUESTED', fetchDetails);
}

function* fetchReposWatcher() {
  yield takeLatest('REPOS_FETCH_REQUESTED', fetchRepos);
}

export default function* root() {
  yield all([fetchReposWatcher(), fetchDetailsWatcher()]);
}
