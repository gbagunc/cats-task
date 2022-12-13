import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { getCategories } from './action';

const initialState = {
  loading: false,
  data: [],
  error: false,
};

const categories = handleActions(
  {
    [getCategories]: (state) => ({
      ...state,
      loading: true,
      error: false,
    }),

    [getCategories.success]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: false,
      data: payload.response,
    }),
    [getCategories.error]: (state) => ({
      ...state,
      loading: false,
      error: true,
    }),
  },
  initialState
);

export default combineReducers({ categories });
