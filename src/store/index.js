import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import images from './images/reducer';
import categories from './categories/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './rootSaga';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({ images, categories });
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
