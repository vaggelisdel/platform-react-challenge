import { CatItem } from '../../../types';
import ActionNames from './actionNames';

function toggleToFavoritesRequested(cat: CatItem) {
  return <const>{
    type: ActionNames.TOOGLE_TO_FAVORITES_REQUESTED,
    payload: {
      data: {
        cat
      },
    },
  };
}

function toogleToFavoritesSucceeded(data:any) {
  return <const>{
    type: ActionNames.TOOGLE_TO_FAVORITES_SUCCEEDED,
    payload: {data},
  };
}

function toogleToFavoritesFailed() {
  return <const>{
    type: ActionNames.TOOGLE_TO_FAVORITES_FAILED,
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
  toggleToFavoritesRequested,
  toogleToFavoritesSucceeded,
  toogleToFavoritesFailed,

  resetApiData
};
