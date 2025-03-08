import { all } from 'redux-saga/effects';

import { HomepageSagas } from '../pages/Homepage/ducks';
import { FavoritesSagas } from '../pages/Favorites/ducks';

export default function* rootSagas() {
  yield all([
    HomepageSagas(),
    FavoritesSagas(),
  ]);
}
