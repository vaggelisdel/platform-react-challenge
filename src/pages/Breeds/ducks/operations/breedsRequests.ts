import ActionCreators from '../actionCreators';
import ActionNames from '../actionNames';
import { call, put, takeLatest } from 'redux-saga/effects';
import Services from '../../../../services';

function* breedsRequestsWatcher(): Iterator<any> {
  yield takeLatest(ActionNames.FETCH_ALL_BREEDS_REQUESTED, fetchAllBreeds);
  yield takeLatest(ActionNames.FETCH_SELECTED_BREED_DETAILS_REQUESTED, fetchBreedDetails);
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

function* fetchBreedDetails(data:any): Iterator<any> {

  const { breedId } = data.payload;

  try {
    const response: any = yield call(Services.Api.Data.get, `/breeds/${breedId}`, {});

    yield put(ActionCreators.fetchSelectedBreedDetailsSucceeded(response.data));

  } catch (error) {

    yield put(ActionCreators.fetchSelectedBreedDetailsFailed());

    throw error;
  }
}



export default breedsRequestsWatcher;
