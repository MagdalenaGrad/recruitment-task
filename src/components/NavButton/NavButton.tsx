import { ArrowRight, ArrowLeft } from 'lucide-react';

import { LinkButton, NavButtonText, NavButtonIcon } from './NavButton.styles';

interface NavButtonProps {
  to: string;
  direction: 'left' | 'right';
  text: string;
}

export const NavButton = ({ to, direction, text }: NavButtonProps) => (
  <LinkButton to={to}>
    {direction === 'left' && (
      <NavButtonIcon>
        <ArrowLeft size={24} />
      </NavButtonIcon>
    )}
    <NavButtonText>{text}</NavButtonText>
    {direction === 'right' && (
      <NavButtonIcon>
        <ArrowRight size={24} />
      </NavButtonIcon>
    )}
  </LinkButton>
);
