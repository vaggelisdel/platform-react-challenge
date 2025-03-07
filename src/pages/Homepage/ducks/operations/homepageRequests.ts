import { actionChannel, call, put, takeLatest } from 'redux-saga/effects';

import Services from '../../../../services';
import ActionCreators from '../actionCreators';
import ActionNames from '../actionNames';

function* homepageRequestsWatcher(): Iterator<any> {
  yield takeLatest(ActionNames.FETCH_RANDOM_CATS_REQUESTED, fetchRandomCats);
  yield takeLatest(ActionNames.FETCH_SELECTED_CAT_DETAILS_REQUESTED, fetchSelectedCatDetails);
}

function* fetchRandomCats(data:any): Iterator<any> {

  const { limit, page } = data.payload.data;

  try {
    const response: any = yield call(Services.Api.Data.get, `/search?limit=${limit}&page=${page}&has_breeds=1`, {
      params: {
      }
    });

    yield put(ActionCreators.fetchRandomCatsSucceeded(response.data));

  } catch (error) {

    yield put(ActionCreators.fetchRandomCatsFailed());

    throw error;
  }
}


function* fetchSelectedCatDetails(data:any): Iterator<any> {

  const { catId } = data.payload;

  try {
    const response: any = yield call(Services.Api.Data.get, `/${catId}`, {
      params: {
      }
    });

    yield put(ActionCreators.fetchSelectedCatDetailsSucceeded(response.data));

  } catch (error) {

    yield put(ActionCreators.fetchSelectedCatDetailsFailed());

    throw error;
  }
}

export default homepageRequestsWatcher;
