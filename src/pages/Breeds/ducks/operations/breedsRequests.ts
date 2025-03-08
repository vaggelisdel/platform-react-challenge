import ActionCreators from '../actionCreators';
import ActionNames from '../actionNames';
import { call, put, takeLatest } from 'redux-saga/effects';
import Services from '../../../../services';

function* breedsRequestsWatcher(): Iterator<any> {
  yield takeLatest(ActionNames.FETCH_ALL_BREEDS_REQUESTED, fetchAllBreeds);
}

function* fetchAllBreeds(data:any): Iterator<any> {

  try {
    const response: any = yield call(Services.Api.Data.get, `/breeds?limit=30`, {});

    yield put(ActionCreators.fetchAllBreedsSucceeded(response.data));

  } catch (error) {

    yield put(ActionCreators.fetchAllBreedsFailed());

    throw error;
  }
}



export default breedsRequestsWatcher;
