import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Movie } from '../types/types';

interface FavoritesState {
  movies: Movie[];
}

const loadFavoritesFromStorage = (): Movie[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem('favoriteMovies');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveFavoritesToStorage = (movies: Movie[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('favoriteMovies', JSON.stringify(movies));
  } catch (error) {
    console.error('Failed to save favorites to localStorage:', error);
  }
};

const initialState: FavoritesState = {
  movies: loadFavoritesFromStorage(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      const exists = state.movies.find((movie) => movie.id === action.payload.id);
      if (!exists) {
        state.movies.push(action.payload);
        saveFavoritesToStorage(state.movies);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
      saveFavoritesToStorage(state.movies);
    },
    loadFavorites: (state) => {
      state.movies = loadFavoritesFromStorage();
    },
  },
});

export const { addToFavorites, removeFromFavorites, loadFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
