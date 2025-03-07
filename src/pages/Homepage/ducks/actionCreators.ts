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


export default {
  fetchRandomCatsRequested,
  fetchRandomCatsSucceeded,
  fetchRandomCatsFailed
};
