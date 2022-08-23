import React from "react";
import { TypographyProps } from "ontwik-ui/src/interfaces";
import { StyledTypography } from "./styles";

const Typography = ({
  children,
  variant,
  bold,
  as,
  ...rest
}: TypographyProps) => {
  switch (variant) {
    case "title":
      return (
        <StyledTypography as={as || "h1"} variant="title" bold={bold} {...rest}>
          {children}
        </StyledTypography>
      );
    case "subtitle":
      return (
        <StyledTypography
          as={as || "h2"}
          variant="subtitle"
          bold={bold}
          {...rest}
        >
          {children}
        </StyledTypography>
      );
    case "paragraph":
      return (
        <StyledTypography
          as={as || "h3"}
          variant="paragraph"
          bold={bold}
          {...rest}
        >
          {children}
        </StyledTypography>
      );
    case "content":
      return (
        <StyledTypography
          as={as || "p"}
          variant="content"
          bold={bold}
          {...rest}
        >
          {children}
        </StyledTypography>
      );
    default:
      return (
        <StyledTypography as={as || "p"} {...rest}>
          {children}
        </StyledTypography>
      );
  }
};

Typography.displayName = "Typography";

export default Typography;
