import { all } from 'redux-saga/effects';

import breedsRequestsWatcher from './breedsRequests';

// Entry point to start all the Sagas
function* rootSaga() {
  yield all([
    breedsRequestsWatcher(),
  ]);
}

export default rootSaga;
