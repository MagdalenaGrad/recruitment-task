import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Heart } from 'lucide-react';
import type { RootState } from '../../app/store';
import { loadFavorites } from '../../app/favoritesSlice';
import { MovieGrid } from '../../components/MovieGrid';
import { Pagination } from '../../components/Pagination';
import { NavButton } from '../../components/NavButton';
import {
  FavoritesContainer,
  PageTitleWrapper,
  FavoritesHeader,
  HeaderIcon,
  HeaderTitle,
  HeaderSubtitle,
  EmptyFavorites,
  EmptyIcon,
  EmptyTitle,
  EmptyText,
  NavButtonContainer,
} from './FavoritesPage.styles';

const MOVIES_PER_PAGE = 10;

export function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.movies);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(favorites.length / MOVIES_PER_PAGE);
  const startIndex = (currentPage - 1) * MOVIES_PER_PAGE;
  const currentPageMovies = favorites.slice(startIndex, startIndex + MOVIES_PER_PAGE);

  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FavoritesContainer>
      <NavButtonContainer>
        <NavButton to="/" direction="left" text="Back to Home" />
      </NavButtonContainer>
      <FavoritesHeader>
        <HeaderIcon>
          <Heart size={32} />
        </HeaderIcon>
        <PageTitleWrapper>
          <HeaderTitle>Your Favorites</HeaderTitle>
          <HeaderSubtitle>
            {favorites.length > 0
              ? `You have ${favorites.length} favorite ${favorites.length === 1 ? 'movie' : 'movies'}`
              : "You haven't added any movies to your favorites yet"}
          </HeaderSubtitle>
        </PageTitleWrapper>
        <HeaderIcon>
          <Heart size={32} />
        </HeaderIcon>
      </FavoritesHeader>

      {favorites.length > 0 ? (
        <>
          <MovieGrid movies={currentPageMovies} />

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      ) : (
        <EmptyFavorites>
          <EmptyIcon>
            <Heart size={64} />
          </EmptyIcon>
          <EmptyTitle>No favorite movies yet</EmptyTitle>
          <EmptyText>Start exploring movies and add them to your favorites!</EmptyText>
        </EmptyFavorites>
      )}
    </FavoritesContainer>
  );
}
