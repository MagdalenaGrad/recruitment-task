import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[8]};
  padding: ${({ theme }) => theme.space[8]};
`;

export const HomePageHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`;

export const HomePageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: -0.025em;
`;

export const HomePageSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.muted};
  max-width: 600px;
  margin: 0 auto;
`;

export const ResultsInfo = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.muted};
`;

export const EmptyStateContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space[12]} 0;
`;

export const EmptyStateText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.muted};
`;

export const NavButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
