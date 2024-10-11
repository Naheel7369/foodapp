import {configureStore} from '@reduxjs/toolkit';
import favoritesreducer from './favorites';
export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesreducer,
  },
});
