import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Heart, Star, Calendar, Clock, DollarSign } from 'lucide-react';
import { useGetMovieDetailsQuery } from '../../api/tmdbApi';
import type { RootState } from '../../app/store';
import { addToFavorites, removeFromFavorites } from '../../features/favoritesSlice';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ErrorMessage } from '../../components/ErrorMessage';
import {
  DetailsContainer,
  MovieContainer,
  MovieBackdrop,
  MovieContent,
  PosterSection,
  MoviePoster,
  FavoriteButton,
  FavoriteIcon,
  FavoriteText,
  InfoSection,
  MovieTitle,
  MovieTagline,
  MovieStats,
  StatItem,
  StatIcon,
  StatText,
  GenreList,
  GenreBadge,
  MovieOverview,
  OverviewTitle,
  OverviewText,
  MovieDetails as MovieDetailsGrid,
  DetailCard,
  DetailTitle,
  DetailText,
  ProductionCompanies,
  CompanyBadge,
} from './MovieDetailsPage.styles';

export const MovieDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.movies);

  const { data: movie, isLoading, error } = useGetMovieDetailsQuery(Number(id), { skip: !id });

  const isFavorite = movie && favorites.some((fav) => fav.id === movie.id);

  const handleFavoriteToggle = () => {
    if (!movie) return;

    if (isFavorite) {
      dispatch(removeFromFavorites(movie.id));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message="Failed to load movie details." />;
  if (!movie) return <ErrorMessage message="Movie not found." />;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://dummyimage.com/500x750/e2e2e2/666666.png&text=No+Poster';

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
    : null;

  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
  const runtime = movie.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
    : 'N/A';

  return (
    <DetailsContainer>
      <MovieContainer $hasBackdrop={!!backdropUrl}>
        {backdropUrl && <MovieBackdrop src={backdropUrl} alt="" />}

        <MovieContent>
          <PosterSection>
            <MoviePoster src={posterUrl} alt={movie.title} />

            <FavoriteButton onClick={handleFavoriteToggle} $isFavorite={isFavorite}>
              <FavoriteIcon>
                <Heart size={16} />
              </FavoriteIcon>
              <FavoriteText>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </FavoriteText>
            </FavoriteButton>
          </PosterSection>

          <InfoSection>
            <MovieTitle>{movie.title}</MovieTitle>
            {movie.tagline && <MovieTagline>{movie.tagline}</MovieTagline>}

            <MovieStats>
              <StatItem>
                <StatIcon>
                  <Star size={16} />
                </StatIcon>
                <StatText>
                  {movie.vote_average.toFixed(1)} ({movie.vote_count.toLocaleString()} votes)
                </StatText>
              </StatItem>

              <StatItem>
                <StatIcon>
                  <Calendar size={16} />
                </StatIcon>
                <StatText>{releaseYear}</StatText>
              </StatItem>

              <StatItem>
                <StatIcon>
                  <Clock size={16} />
                </StatIcon>
                <StatText>{runtime}</StatText>
              </StatItem>
            </MovieStats>

            <GenreList>
              {/* TODO: extract and import type */}
              {movie.genres.map((genre: { id: number; name: string }) => (
                <GenreBadge key={genre.id}>{genre.name}</GenreBadge>
              ))}
            </GenreList>

            <MovieOverview>
              <OverviewTitle>Overview</OverviewTitle>
              <OverviewText>{movie.overview || 'No overview available.'}</OverviewText>
            </MovieOverview>

            <MovieDetailsGrid>
              <DetailCard>
                <DetailTitle>Status</DetailTitle>
                <DetailText>{movie.status}</DetailText>
              </DetailCard>

              <DetailCard>
                <DetailTitle>Original Language</DetailTitle>
                <DetailText>{movie.original_language.toUpperCase()}</DetailText>
              </DetailCard>

              {movie.budget > 0 && (
                <DetailCard>
                  <DetailTitle>
                    <DollarSign size={16} /> Budget
                  </DetailTitle>
                  <DetailText>${movie.budget.toLocaleString()}</DetailText>
                </DetailCard>
              )}

              {movie.revenue > 0 && (
                <DetailCard>
                  <DetailTitle>
                    <DollarSign size={16} /> Revenue
                  </DetailTitle>
                  <DetailText>${movie.revenue.toLocaleString()}</DetailText>
                </DetailCard>
              )}
            </MovieDetailsGrid>

            {movie.production_companies.length > 0 && (
              <ProductionCompanies>
                <DetailTitle>Production Companies</DetailTitle>
                <div>
                  {/* TODO: extract and import type */}
                  {movie.production_companies.map(
                    (company: { id: number; name: string; logo_path: string | null }) => (
                      <CompanyBadge key={company.id}>{company.name}</CompanyBadge>
                    )
                  )}
                </div>
              </ProductionCompanies>
            )}
          </InfoSection>
        </MovieContent>
      </MovieContainer>
    </DetailsContainer>
  );
};
