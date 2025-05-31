import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[8]};
`;

export const MovieContainer = styled.div<{ $hasBackdrop: boolean }>`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${({ theme, $hasBackdrop }) => ($hasBackdrop ? '0' : theme.space[6])};
`;

export const MovieBackdrop = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  z-index: 0;
`;

export const MovieContent = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: ${({ theme }) => theme.space[8]};
  padding: ${({ theme }) => theme.space[6]};
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.background} 60%,
    ${({ theme }) => theme.colors.background}80 80%,
    ${({ theme }) => theme.colors.background}40 100%
  );

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 300px 1fr;
  }
`;

export const PosterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`;

export const MoviePoster = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const FavoriteButton = styled.button<{ $isFavorite?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.default};
  background-color: ${({ theme, $isFavorite }) =>
    $isFavorite ? theme.colors.secondary : 'transparent'};
  color: ${({ theme, $isFavorite }) => ($isFavorite ? 'white' : theme.colors.foreground)};
  border: 1px solid
    ${({ theme, $isFavorite }) => ($isFavorite ? theme.colors.secondary : theme.colors.border)};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, $isFavorite }) =>
      $isFavorite ? theme.colors.secondaryHover : theme.colors.mutedBackground};
  }
`;

export const FavoriteIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FavoriteText = styled.span``;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
`;

export const MovieTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

export const MovieTagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.muted};
  font-style: italic;
`;

export const MovieStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[1]};
`;

export const StatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatText = styled.span``;

export const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
`;

export const GenreBadge = styled.span`
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.mutedBackground};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const MovieOverview = styled.div`
  padding: ${({ theme }) => theme.space[6]};
  border-radius: ${({ theme }) => theme.radii.lg};
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const OverviewTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

export const OverviewText = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

export const MovieDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${({ theme }) => theme.space[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DetailCard = styled.div`
  padding: ${({ theme }) => theme.space[4]};
  border-radius: ${({ theme }) => theme.radii.lg};
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const DetailTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.space[2]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[1]};
`;

export const DetailText = styled.p`
  color: ${({ theme }) => theme.colors.muted};
`;

export const ProductionCompanies = styled.div`
  padding: ${({ theme }) => theme.space[6]};
  border-radius: ${({ theme }) => theme.radii.lg};
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const CompanyBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  margin: ${({ theme }) => `${theme.space[1]} ${theme.space[1]}`};
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
