import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 6rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HomeLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <Title>404</Title>
      <Message>Oops! The page you're looking for doesn't exist.</Message>
      <HomeLink to="/">Return to Home</HomeLink>
    </Container>
  );
};
