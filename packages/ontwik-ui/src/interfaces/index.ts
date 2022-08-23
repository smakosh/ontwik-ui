import { ReactElement, ReactNode } from "react";
import { config } from "ontwik-ui/src/theme";

export type StateAndColor = {
  state?: "danger" | "success" | "warning";
  color?: string;
  bg?: string;
  borderColor?: string;
  gradients?: [string, string];
};

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  StateAndColor & {
    title?: string;
    wide?: boolean;
    variant?: "primary" | "secondary" | "ghost";
    size?: "xlarge" | "large" | "medium" | "small";
    uppercase?: boolean;
    icon?: (HTMLElement & SVGElement) | ReactNode | ReactElement;
    iconPosition?: "left" | "right";
  };

export type InputFieldProps = {
  label?: string;
  children: ReactNode;
  error?: string | boolean;
  relative?: boolean;
};

export type TypographyProps = {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  variant: "title" | "subtitle" | "paragraph" | "content";
  margin?: [number, number, number, number];
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  letterSpacing?: string;
  fontWeight?: number;
  align?: "left" | "center" | "right";
  bold?: boolean;
  htmlFor?: string;
  fontFamily?: string;
  children: ReactNode;
};

export type OntwikProviderProps = {
  theme?: typeof config;
  children: ReactNode;
};
