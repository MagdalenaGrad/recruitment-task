import { Movie } from '../types/types';

export const mockMovie: Movie = {
  id: 1,
  title: 'Test Movie',
  poster_path: '/test.jpg',
  vote_average: 8.5,
  release_date: '2023-01-01',
  overview: 'Test overview',
  backdrop_path: null,
  genre_ids: [1, 2],
  popularity: 100,
  adult: false,
  original_language: 'en',
  original_title: 'Test Movie Original',
  video: false,
  vote_count: 100,
};
