import { combineReducers } from 'redux';

import { HomepageReducer } from '../pages/Homepage/ducks';
import { FavoritesReducer } from '../pages/Favorites/ducks';
import BreedsReducer from '../pages/Breeds/ducks/reducers';

const rootReducer = combineReducers({
  data: combineReducers({
    homepage: HomepageReducer,
    favorites: FavoritesReducer,
    breeds: BreedsReducer
  }),
  
});

export default rootReducer;
