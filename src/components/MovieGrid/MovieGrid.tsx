import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/types';
import { MovieGridContainer } from './MovieGrid.styles';

interface MovieGridProps {
  movies: Movie[];
}

export const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
    <MovieGridContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MovieGridContainer>
  );
};
