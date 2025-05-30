import { useState, useEffect } from 'react';
import { useSearchMoviesQuery } from '../../api/tmdbApi';
import { SearchBar } from '../../components/SearchBar';
import { MovieGrid } from '../../components/MovieGrid';
import { Pagination } from '../../components/Pagination';
// import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from '../../components/ErrorMessage';
import { useDebounce } from '../../hooks/useDebounce';
import {
  HomePageContainer,
  HomePageHeader,
  HomePageTitle,
  HomePageSubtitle,
  ResultsInfo,
  EmptyStateContainer,
  EmptyStateText,
} from './HomePage.styles';

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedQuery = useDebounce(searchQuery, 500);

  const {
    data: searchResults,
    isLoading,
    error,
    isFetching,
  } = useSearchMoviesQuery(
    { query: debouncedQuery, page: currentPage },
    { skip: !debouncedQuery.trim() }
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedQuery]);

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    setSearchQuery(query);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HomePageContainer>
      <HomePageHeader>
        <HomePageTitle>Discover Amazing Movies</HomePageTitle>
        <HomePageSubtitle>
          Search through thousands of movies, explore details, and build your personal favorites
          collection
        </HomePageSubtitle>
      </HomePageHeader>

      <SearchBar onSearch={handleSearch} isLoading={isFetching} />

      {error && <ErrorMessage message="Failed to search movies. Please try again." />}

      {/* TODO: implement a spinner */}
      {/* {isLoading && <LoadingSpinner />} */}

      {searchResults && searchResults.results.length > 0 && (
        <>
          <ResultsInfo>
            Found {searchResults.total_results.toLocaleString()} results for "{debouncedQuery}"
          </ResultsInfo>

          <MovieGrid movies={searchResults.results} />

          {searchResults.total_pages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={searchResults.total_pages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}

      {searchResults && searchResults.results.length === 0 && debouncedQuery && (
        <EmptyStateContainer>
          <EmptyStateText>
            No movies found for "{debouncedQuery}". Try a different search term.
          </EmptyStateText>
        </EmptyStateContainer>
      )}

      {!debouncedQuery && (
        <EmptyStateContainer>
          <EmptyStateText>Start typing to search for movies...</EmptyStateText>
        </EmptyStateContainer>
      )}
    </HomePageContainer>
  );
};
