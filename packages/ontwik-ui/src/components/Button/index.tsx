import React from "react";
import { forwardRef } from "react";
import { ButtonProps } from "ontwik-ui/src/interfaces";
import { StyledButton } from "./styles";

const Button = forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <StyledButton ref={ref} {...props}>
      <>
        {props.icon && props.icon}
        <span>{props.title}</span>
      </>
    </StyledButton>
  )
);

Button.displayName = "Button";

export default Button;
