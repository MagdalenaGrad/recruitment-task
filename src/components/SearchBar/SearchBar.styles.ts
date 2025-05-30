import styled from 'styled-components';

export const SearchForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.space[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.muted};
  pointer-events: none;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: ${({ theme }) =>
    `${theme.space[3]} ${theme.space[3]} ${theme.space[3]} ${theme.space[10]}`};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  outline: none;
  transition: ${({ theme }) => theme.transitions.default};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}33;
  }
`;

export const LoaderIcon = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.space[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.muted};
`;

export const SearchButton = styled.button`
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[5]}`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
