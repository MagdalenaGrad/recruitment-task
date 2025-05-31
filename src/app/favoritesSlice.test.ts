import favoritesReducer, { addToFavorites, removeFromFavorites } from './favoritesSlice';
import { mockMovie } from '../utils/testUtils';

describe('favorites reducer', () => {
  test('should return initial state', () => {
    expect(favoritesReducer(undefined, { type: '' })).toEqual({
      movies: [],
    });
  });

  test('should add movie to favorites', () => {
    const initialState = { movies: [] };
    const action = addToFavorites(mockMovie);
    const state = favoritesReducer(initialState, action);

    expect(state.movies).toHaveLength(1);
    expect(state.movies[0]).toEqual(mockMovie);
  });

  test('should remove movie from favorites', () => {
    const initialState = { movies: [mockMovie] };
    const action = removeFromFavorites(mockMovie.id);
    const state = favoritesReducer(initialState, action);

    expect(state.movies).toHaveLength(0);
  });
});
