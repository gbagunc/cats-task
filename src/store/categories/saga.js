import { all, takeEvery, put, call } from 'redux-saga/effects';

import { getCategoriesReq } from '../../api';
import { getCategories } from './action';

function* getCategoriesRequest() {
  const { data } = yield call(getCategoriesReq);

  return data;
}

function* watchGetCategories() {
  yield takeEvery(getCategories, function* ({ payload }) {
    try {
      const response = yield call(getCategoriesRequest, payload);
      yield put(getCategories.success({ response }));
    } catch (e) {
      yield put(getCategories.error());
    }
  });
}

export default function* getAllCategories() {
  yield all([watchGetCategories()]);
}
