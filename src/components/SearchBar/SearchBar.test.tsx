import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { SearchBar } from './SearchBar';
import { theme } from '../../styles/theme';

const mockValue = 'Star Wars';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('SearchBar', () => {
  test('calls onSearch when input changes', () => {
    const mockOnSearch = jest.fn();
    renderWithTheme(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search for movies...');
    fireEvent.change(input, { target: { value: mockValue } });

    expect(mockOnSearch).toHaveBeenCalledWith(mockValue);
  });

  test('search button is disabled when input is empty', () => {
    renderWithTheme(<SearchBar onSearch={jest.fn()} />);

    const button = screen.getByText('Search');
    expect(button).toBeDisabled();
  });

  test('search button is enabled when input has text', () => {
    renderWithTheme(<SearchBar onSearch={jest.fn()} />);

    const input = screen.getByPlaceholderText('Search for movies...');
    fireEvent.change(input, { target: { value: mockValue } });

    const button = screen.getByText('Search');
    expect(button).not.toBeDisabled();
  });
});
