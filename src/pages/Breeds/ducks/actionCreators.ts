import ActionNames from './actionNames';

function fetchAllBreedsRequested() {
  return <const>{
    type: ActionNames.FETCH_ALL_BREEDS_REQUESTED,
    payload: {
      data: {},
    },
  };
}

function fetchAllBreedsSucceeded(data:any) {
  return <const>{
    type: ActionNames.FETCH_ALL_BREEDS_SUCCEEDED,
    payload: {data},
  };
}

function fetchAllBreedsFailed() {
  return <const>{
    type: ActionNames.FETCH_ALL_BREEDS_FAILED,
    payload:  {},
  };
}

function fetchSelectedBreedDetailsRequested(breedId: string) {
  return <const>{
    type: ActionNames.FETCH_SELECTED_BREED_DETAILS_REQUESTED,
    payload: {breedId},
  };
}

function fetchSelectedBreedDetailsSucceeded(data:any) {
  return <const>{
    type: ActionNames.FETCH_SELECTED_BREED_DETAILS_SUCCEEDED,
    payload: {data},
  };
}

function fetchSelectedBreedDetailsFailed() {
  return <const>{
    type: ActionNames.FETCH_SELECTED_BREED_DETAILS_FAILED,
    payload:  {},
  };
}


function resetApiData(slice = 'all') {
  return <const>{
    type: ActionNames.COMMON_API_RESET_DATA,
    payload: {
      slice,
    },
  };
}


export default {
  fetchAllBreedsRequested,
  fetchAllBreedsSucceeded,
  fetchAllBreedsFailed,

  fetchSelectedBreedDetailsRequested,
  fetchSelectedBreedDetailsSucceeded,
  fetchSelectedBreedDetailsFailed,

  resetApiData
};
