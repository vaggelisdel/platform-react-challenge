import { all } from 'redux-saga/effects';

import { HomepageSagas } from '../pages/Homepage/ducks';

export default function* rootSagas() {
  yield all([
    HomepageSagas(),
  ]);
}
