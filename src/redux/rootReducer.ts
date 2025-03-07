import { combineReducers } from 'redux';

import { HomepageReducer } from '../pages/Homepage/ducks';

const rootReducer = combineReducers({
  data: HomepageReducer,
});

export default rootReducer;
