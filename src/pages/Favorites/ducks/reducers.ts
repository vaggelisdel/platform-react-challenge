import { combineReducers } from 'redux';

import ActionNames from './actionNames';
import { CatItem } from '../../../types';

function FavoriteCatsReducer(state = [], action: any) {
  switch (action.type) {
    case ActionNames.TOOGLE_TO_FAVORITES_REQUESTED: {
      return state;
    }

    case ActionNames.TOOGLE_TO_FAVORITES_SUCCEEDED: {
      const cat = action.payload.data;
      const isAlreadyFavorite = state.some((c: CatItem) => c.id === cat.id);

      return isAlreadyFavorite
        ? state.filter((c: CatItem) => c.id !== cat.id) // Remove if exists
        : [...state, cat];
    }

    case ActionNames.TOOGLE_TO_FAVORITES_FAILED: {
      return state;
    }

    default:
      return state;
  }
}

const FavoritesReducer = combineReducers({
  cats: FavoriteCatsReducer,
});

export default FavoritesReducer;
