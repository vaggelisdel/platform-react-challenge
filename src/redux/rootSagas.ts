import { all } from 'redux-saga/effects';

import { HomepageSagas } from '../pages/Homepage/ducks';
import { FavoritesSagas } from '../pages/Favorites/ducks';
import { BreedsSagas } from '../pages/Breeds/ducks';

export default function* rootSagas() {
  yield all([
    HomepageSagas(),
    FavoritesSagas(),
    BreedsSagas(),
  ]);
}
