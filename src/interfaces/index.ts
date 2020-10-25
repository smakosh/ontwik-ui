import { ReactChild } from 'react';

export interface ButtonProps {
  wide?: boolean;
  variant?: string;
  state?: string;
  size?: string;
  uppercase?: boolean;
  bg?: string;
  color?: string;
  borderColor?: string;
}

export interface InputFieldProps {
  label?: string;
  children: ReactChild;
  error?: string | boolean;
  relative?: boolean;
}

export interface StateAndColor {
  state?: 'danger' | 'success' | 'warning';
  color?: string;
  bg?: string;
  borderColor?: string;
}
