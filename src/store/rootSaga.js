import { all } from 'redux-saga/effects';
import getAllCategories from './categories/saga';
import getAllImages from './images/saga';

export default function* rootSaga() {
  yield all([getAllImages(), getAllCategories()]);
}
