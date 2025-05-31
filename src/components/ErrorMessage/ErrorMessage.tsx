import { AlertTriangle } from 'lucide-react';
import { ErrorContainer, ErrorIcon, ErrorText } from './ErrorMessage.styles';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <ErrorContainer>
    <ErrorIcon>
      <AlertTriangle size={32} />
    </ErrorIcon>
    <ErrorText>{message}</ErrorText>
  </ErrorContainer>
);
