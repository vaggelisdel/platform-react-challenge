import { combineReducers } from 'redux';
import CONSTANTS from '../../../common/constants';

import ActionNames from './actionNames';
import { CatItem } from '../../../types';

const AllBreedsInitialState = {
  list: [],
  status: ''
};

function FetchAllBreeds(state = AllBreedsInitialState, action: any) {
  switch (action.type) {
    case ActionNames.FETCH_ALL_BREEDS_REQUESTED: {
      return {
        ...state,
        status: CONSTANTS.RESPONSE_STATUS.PENDING,
      }
    }

    case ActionNames.FETCH_ALL_BREEDS_SUCCEEDED: {
      return {
        list: [...state.list, ...action.payload.data],
        status: CONSTANTS.RESPONSE_STATUS.SUCCESS,
      };
    }

    case ActionNames.FETCH_ALL_BREEDS_FAILED: {
      return {
        ...action.payload.data,
        status: CONSTANTS.RESPONSE_STATUS.FAILURE,
      };
    }

    case ActionNames.COMMON_API_RESET_DATA: {
      const slice = action.payload.slice;
      if (slice === 'breedDetails' || slice === 'all') {
        return {};
      }

      return state;
    }

    default:
      return state;
  }
}

const BreedsReducer = combineReducers({
  list: FetchAllBreeds,
});

export default BreedsReducer;
