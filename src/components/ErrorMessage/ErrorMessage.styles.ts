import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[8]};
  margin: ${({ theme }) => theme.space[4]} 0;
`;

export const ErrorIcon = styled.div`
  color: ${({ theme }) => theme.colors.error};
`;

export const ErrorText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.error};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  max-width: 500px;
`;
