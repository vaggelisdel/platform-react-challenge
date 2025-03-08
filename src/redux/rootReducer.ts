import { combineReducers } from 'redux';

import { HomepageReducer } from '../pages/Homepage/ducks';
import { FavoritesReducer } from '../pages/Favorites/ducks';

const rootReducer = combineReducers({
  data: combineReducers({
    homepage: HomepageReducer,
    favorites: FavoritesReducer
  }),
  
});

export default rootReducer;
