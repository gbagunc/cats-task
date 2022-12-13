import { all, takeEvery, put, call } from 'redux-saga/effects';

import { getImagesReq } from '../../api';
import { getImages } from './action';

function* getImagesRequest(action) {
  const { data } = yield call(getImagesReq, action.id, action.limit);

  return data;
}

function* watchGetImages() {
  yield takeEvery(getImages, function* ({ payload }) {
    try {
      const response = yield call(getImagesRequest, payload);
      yield put(getImages.success({ response }));
    } catch (e) {
      yield put(getImages.error());
    }
  });
}

export default function* getAllImages() {
  yield all([watchGetImages()]);
}
