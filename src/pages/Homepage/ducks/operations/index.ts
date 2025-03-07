import { all } from 'redux-saga/effects';

import homepageRequestsWatcher from './homepageRequests';

// Entry point to start all the Sagas
function* rootSaga() {
  yield all([
    homepageRequestsWatcher(),
  ]);
}

export default rootSaga;
