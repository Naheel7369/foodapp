import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FavioriteState {
  ids: number[];
}
const initialState = {
  ids: [],
};
const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{id: number}>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<{id: number}>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id, 1));
    },
  },
});
export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;
export default favoriteSlice.reducer;
