import { Loader2 } from 'lucide-react';
import styled, { keyframes } from 'styled-components';

const SpinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

export const StyledLoader = styled(Loader2)`
  height: 2rem;
  width: 2rem;
  animation: ${SpinAnimation} 1s linear infinite;
  color: ${({ theme }) => theme.colors.primary || 'currentColor'};
`;
