import { all } from 'redux-saga/effects';
import movie from './movie/saga';

export default function* rootSagas() {
  yield all([...movie]);
}
