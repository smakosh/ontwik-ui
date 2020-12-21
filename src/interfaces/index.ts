import { ReactChild, ReactNode } from 'react';
import { config } from '../theme';

export type StateAndColor = {
  state?: 'danger' | 'success' | 'warning';
  color?: string;
  bg?: string;
  borderColor?: string;
  gradients?: [string, string];
  degree?: number;
};

export type ButtonProps = StateAndColor & {
  title?: string;
  wide?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: string;
  uppercase?: boolean;
  icon?: (HTMLElement & SVGElement) | ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'submit' | 'reset' | 'button';
};

export type InputFieldProps = {
  label?: string;
  children: ReactChild;
  error?: string | boolean;
  relative?: boolean;
};

export type OntwikProviderProps = {
  theme?: typeof config;
};
