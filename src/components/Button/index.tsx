import React from 'react';
import { ButtonProps } from '../../interfaces';
import { StyledButton } from './styles';

const Button = (props: ButtonProps) => (
  <StyledButton {...props}>
    {props.icon && props.icon}
    <span>{props.title}</span>
  </StyledButton>
);

export default Button;
