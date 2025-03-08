import { all } from 'redux-saga/effects';

import favoritesRequestsWatcher from './favoritesRequests';

// Entry point to start all the Sagas
function* rootSaga() {
  yield all([
    favoritesRequestsWatcher(),
  ]);
}

export default rootSaga;
