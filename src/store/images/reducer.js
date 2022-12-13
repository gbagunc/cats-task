import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { getImages } from './action';

const initialState = {
  loading: false,
  data: [],
  error: false,
};

const images = handleActions(
  {
    [getImages]: (state) => ({
      ...state,
      loading: true,
      error: false,
    }),

    [getImages.success]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: false,
      data: payload.response,
    }),
    [getImages.error]: (state) => ({ ...state, loading: false, error: true }),
  },
  initialState
);

export default combineReducers({ images });
