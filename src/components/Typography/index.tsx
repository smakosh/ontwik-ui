import React, { FC } from 'react';
import { TypographyProps } from '../../interfaces';
import { StyledTypography } from './styles';

const Typography: FC<TypographyProps> = ({
  children,
  variant,
  bold,
  as,
  ...rest
}) => {
  switch (variant) {
    case 'title':
      return (
        <StyledTypography as={as || 'h1'} variant="title" bold={bold} {...rest}>
          {children}
        </StyledTypography>
      );
    case 'subtitle':
      return (
        <StyledTypography
          as={as || 'h2'}
          variant="subtitle"
          bold={bold}
          {...rest}
        >
          {children}
        </StyledTypography>
      );
    case 'paragraph':
      return (
        <StyledTypography
          as={as || 'h3'}
          variant="paragraph"
          bold={bold}
          {...rest}
        >
          {children}
        </StyledTypography>
      );
    case 'content':
      return (
        <StyledTypography
          as={as || 'p'}
          variant="content"
          bold={bold}
          {...rest}
        >
          {children}
        </StyledTypography>
      );
    default:
      return (
        <StyledTypography as={as || 'p'} {...rest}>
          {children}
        </StyledTypography>
      );
  }
};

export default Typography;
