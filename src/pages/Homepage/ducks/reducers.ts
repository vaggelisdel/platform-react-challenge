import { combineReducers } from 'redux';

import CONSTANTS from '../../../common/constants';
import ActionNames from './actionNames';
import { HomepageActionNames } from '../ducks';

const RandomCatsInitialState = {
  randomCats: [],
  status: '',
  page: 1
};

function RandomCatsReducer(
  state = RandomCatsInitialState,
  action: any
) {
  switch (action.type) {
    case ActionNames.FETCH_RANDOM_CATS_REQUESTED: {
      return {
        ...state,
        status: CONSTANTS.RESPONSE_STATUS.PENDING,
      };
    }

    case ActionNames.FETCH_RANDOM_CATS_SUCCEEDED: {
      return {
        randomCats: [...state.randomCats, ...action.payload.data],
        status: CONSTANTS.RESPONSE_STATUS.SUCCESS,
        page: state.page + 1
      };
    }

    case ActionNames.FETCH_RANDOM_CATS_FAILED: {
      return {
        ...action.payload.data,
        status: CONSTANTS.RESPONSE_STATUS.FAILURE,
      };
    }

    default:
      return state;
  }
}

const HomepageReducer = combineReducers({
  cats: RandomCatsReducer,
});

export default HomepageReducer;
