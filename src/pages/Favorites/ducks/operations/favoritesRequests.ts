import { put, takeLatest } from 'redux-saga/effects';

import ActionCreators from '../actionCreators';
import ActionNames from '../actionNames';

function* favoritesRequestsWatcher(): Iterator<any> {
  yield takeLatest(ActionNames.TOOGLE_TO_FAVORITES_REQUESTED, toogleToFavorites);
}

function* toogleToFavorites(data:any): Iterator<any> {

  const { cat } = data.payload.data;    

  try {

    yield put(ActionCreators.toogleToFavoritesSucceeded(cat));

  } catch (error) {

    yield put(ActionCreators.toogleToFavoritesFailed());

    throw error;
  }
}


export default favoritesRequestsWatcher;
