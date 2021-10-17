import React from 'react';
import { ButtonProps } from '../../interfaces';
import { StyledButton } from './styles';

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <StyledButton ref={ref} {...props}>
      {props.icon && props.icon}
      <span>{props.title}</span>
    </StyledButton>
  )
);

export default Button;
