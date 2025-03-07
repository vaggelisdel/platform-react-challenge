import { actionChannel, call, put, takeLatest } from 'redux-saga/effects';

import Services from '../../../../services';
import ActionCreators from '../actionCreators';
import ActionNames from '../actionNames';

function* homepageRequestsWatcher(): Iterator<any> {
  const channel: any = yield actionChannel(ActionNames.FETCH_RANDOM_CATS_REQUESTED);
  yield takeLatest(channel, fetchRandomCats);
}

function* fetchRandomCats(data:any): Iterator<any> {

  const { limit, page } = data.payload.data;

  try {
    const response: any = yield call(Services.Api.Data.get, `/search?limit=${limit}&page=${page}`, {
      params: {
      }
    });

    yield put(ActionCreators.fetchRandomCatsSucceeded(response.data));

  } catch (error) {

    yield put(ActionCreators.fetchRandomCatsFailed());

    throw error;
  }
}

export default homepageRequestsWatcher;
