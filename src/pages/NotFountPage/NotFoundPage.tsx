import { Container, Title, Message, HomeLink } from './NotFoundPage.styles';

export const NotFoundPage = () => {
  return (
    <Container>
      <Title>404</Title>
      <Message>Oops! The page you're looking for doesn't exist.</Message>
      <HomeLink to="/">Return to Home</HomeLink>
    </Container>
  );
};
