import type React from 'react';
import { useState } from 'react';
import { Search, Loader } from 'lucide-react';
import {
  SearchForm,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
  LoaderIcon,
} from './SearchBar.styles';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchContainer>
        <SearchIcon>
          <Search size={16} />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={handleInputChange}
        />
        {isLoading && (
          <LoaderIcon>
            <Loader size={16} className="spinner" />
          </LoaderIcon>
        )}
        <SearchButton type="submit" disabled={!query.trim() || isLoading}>
          Search
        </SearchButton>
      </SearchContainer>
    </SearchForm>
  );
};
