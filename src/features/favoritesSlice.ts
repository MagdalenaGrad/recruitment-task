import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  overview?: string;
}

interface FavoritesState {
  items: Movie[];
}

const initialState: FavoritesState = {
  items: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      const exists = state.items.find((movie) => movie.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.items));
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((movie) => movie.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
