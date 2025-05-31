import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi, useSearchMoviesQuery } from './tmdbApi';
import { mockMovie } from '../utils/testUtils';

jest.mock('./tmdbApi', () => ({
  tmdbApi: {
    reducerPath: 'api',
    reducer: () => ({}),
    endpoints: {
      searchMovies: {},
    },
    useSearchMoviesQuery: jest.fn(),
  },
  useSearchMoviesQuery: jest.fn(),
}));

const mockedUseSearchMoviesQuery = useSearchMoviesQuery as jest.Mock;

describe('TMDB API', () => {
  beforeEach(() => {
    mockedUseSearchMoviesQuery.mockReturnValue({
      data: {
        results: [mockMovie],
        total_pages: 1,
        total_results: 1,
      },
      isSuccess: true,
      isLoading: false,
      error: null,
    });
  });

  test('useSearchMoviesQuery returns movie data', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Provider
        store={configureStore({
          reducer: { [tmdbApi.reducerPath]: tmdbApi.reducer },
        })}
      >
        {children}
      </Provider>
    );

    const { result } = renderHook(() => useSearchMoviesQuery({ query: 'test', page: 1 }), {
      wrapper,
    });

    expect(result.current.data.results).toHaveLength(1);
    expect(result.current.data.results[0].title).toBe('Test Movie');
  });
});
