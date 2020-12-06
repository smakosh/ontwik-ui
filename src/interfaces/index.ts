import { ReactChild, ReactNode } from 'react';

export interface ButtonProps {
  title?: string;
  wide?: boolean;
  variant?: string;
  state?: string;
  size?: string;
  uppercase?: boolean;
  bg?: string;
  color?: string;
  borderColor?: string;
  gradients?: [string, string];
  degree?: number;
  icon?: (HTMLElement & SVGElement) | ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'submit' | 'reset' | 'button';
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
  gradients?: [string, string];
  degree?: number;
}
