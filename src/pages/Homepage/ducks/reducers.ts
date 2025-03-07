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

function CatDetailsReducer(
  state = {},
  action: any
) {
  switch (action.type) {
    case ActionNames.FETCH_SELECTED_CAT_DETAILS_REQUESTED: {
      return {
        ...state,
        status: CONSTANTS.RESPONSE_STATUS.PENDING,
      };
    }

    case ActionNames.FETCH_SELECTED_CAT_DETAILS_SUCCEEDED: {
      return {
        ...action.payload.data,
        status: CONSTANTS.RESPONSE_STATUS.SUCCESS,};
    }

    case ActionNames.FETCH_SELECTED_CAT_DETAILS_FAILED: {
      return {
        ...action.payload.data,
        status: CONSTANTS.RESPONSE_STATUS.FAILURE,
      };
    }

    case ActionNames.COMMON_API_RESET_DATA: {
      const slice = action.payload.slice;
      if (slice === 'catDetails' || slice === 'all') {
        return {};
      }

      return state;
    }

    default:
      return state;
  }
}

const HomepageReducer = combineReducers({
  cats: RandomCatsReducer,
  catDetails: CatDetailsReducer
});

export default HomepageReducer;
