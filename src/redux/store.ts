import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSagas from './rootSagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware] as Array<any>;

const composeEnhancers = composeWithDevTools({
  name: 'CatLover',
});

const Store = createStore(
  rootReducer,
  // We need to compose enhancer since createStore can accept only one
  composeEnhancers(applyMiddleware(...middlewares))
);

// Initialize Sagas
sagaMiddleware.run(rootSagas);

export default Store;
