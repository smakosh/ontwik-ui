import { ReactChild } from 'react';

export interface ButtonProps {
  wide?: boolean;
  variant?: string;
  state?: string;
  size?: string;
}

export interface InputFieldProps {
  label?: string;
  children: ReactChild;
  error?: string | boolean;
  relative?: boolean;
}
