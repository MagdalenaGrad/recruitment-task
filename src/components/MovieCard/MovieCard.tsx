import type React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Heart, Star, Calendar } from 'lucide-react';
import type { Movie } from '../../types/types';
import type { RootState } from '../../app/store';
import { addToFavorites, removeFromFavorites } from '../../app/favoritesSlice';
import {
  CardContainer,
  PosterContainer,
  MoviePoster,
  PosterOverlay,
  FavoriteButton,
  FavoriteIcon,
  CardContent,
  MovieTitle,
  MovieMeta,
  MetaItem,
  MetaIcon,
  MetaText,
  MovieDescription,
} from './MovieCard.styles';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.movies);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://dummyimage.com/500x750/e2e2e2/666666.png&text=No+Poster';

  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';

  return (
    <CardContainer>
      <Link to={`/movie/${movie.id}`}>
        <PosterContainer>
          <MoviePoster src={posterUrl} alt={movie.title} loading="lazy" />
          <PosterOverlay />
          <FavoriteButton onClick={handleFavoriteToggle}>
            <FavoriteIcon>
              <Heart size={24} fill={isFavorite ? 'currentColor' : 'none'} />
            </FavoriteIcon>
          </FavoriteButton>
        </PosterContainer>

        <CardContent>
          <MovieTitle>{movie.title}</MovieTitle>

          <MovieMeta>
            <MetaItem>
              <MetaIcon>
                <Calendar size={12} />
              </MetaIcon>
              <MetaText>{releaseYear}</MetaText>
            </MetaItem>

            <MetaItem>
              <MetaIcon>
                <Star size={12} />
              </MetaIcon>
              <MetaText>{movie.vote_average.toFixed(1)}</MetaText>
            </MetaItem>
          </MovieMeta>

          <MovieDescription>{movie.overview || 'No description available.'}</MovieDescription>
        </CardContent>
      </Link>
    </CardContainer>
  );
};
