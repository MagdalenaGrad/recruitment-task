interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  // TODO: add styles, icon ect
  <div>{message}</div>
);
