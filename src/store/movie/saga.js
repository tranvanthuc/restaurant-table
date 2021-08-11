import { call, put, takeLatest, delay } from 'redux-saga/effects';
import MovieService from 'services/MovieService';
import { GET_LIST_MOVIES_REQUEST } from 'store/movie/actions';
import { getListMoviesFailure, getListMoviesSuccess } from './actions';

export function* getListMovies() {
  try {
    const { data } = yield call(MovieService.getList);
    yield delay(2000);
    yield put(getListMoviesSuccess(data.results));
  } catch (error) {
    yield put(getListMoviesFailure(error));
  }
}

function* watchGetList() {
  yield takeLatest(GET_LIST_MOVIES_REQUEST, getListMovies);
}

export default [watchGetList()];
