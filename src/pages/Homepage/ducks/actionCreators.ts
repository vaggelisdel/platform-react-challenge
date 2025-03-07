import ActionNames from './actionNames';

function fetchRandomCatsRequested(limit: number, page: number) {
  return <const>{
    type: ActionNames.FETCH_RANDOM_CATS_REQUESTED,
    payload: {
      data: {
        limit,
        page
      },
    },
  };
}

function fetchRandomCatsSucceeded(data:any) {
  return <const>{
    type: ActionNames.FETCH_RANDOM_CATS_SUCCEEDED,
    payload: {data},
  };
}

function fetchRandomCatsFailed() {
  return <const>{
    type: ActionNames.FETCH_RANDOM_CATS_FAILED,
    payload:  {},
  };
}

function fetchSelectedCatDetailsRequested(catId: string) {
  return <const>{
    type: ActionNames.FETCH_SELECTED_CAT_DETAILS_REQUESTED,
    payload: {catId},
  };
}

function fetchSelectedCatDetailsSucceeded(data:any) {
  return <const>{
    type: ActionNames.FETCH_SELECTED_CAT_DETAILS_SUCCEEDED,
    payload: {data},
  };
}

function fetchSelectedCatDetailsFailed() {
  return <const>{
    type: ActionNames.FETCH_SELECTED_CAT_DETAILS_FAILED,
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
  fetchRandomCatsRequested,
  fetchRandomCatsSucceeded,
  fetchRandomCatsFailed,

  fetchSelectedCatDetailsRequested,
  fetchSelectedCatDetailsSucceeded,
  fetchSelectedCatDetailsFailed,

  resetApiData
};
