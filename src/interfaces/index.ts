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

export type TypographyProps = {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  variant: 'title' | 'subtitle' | 'paragraph' | 'content';
  margin?: [number, number, number, number];
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  letterSpacing?: string;
  fontWeight?: number;
  align?: 'left' | 'center' | 'right';
  bold?: boolean;
  htmlFor?: string;
};

export type OntwikProviderProps = {
  theme?: typeof config;
};
