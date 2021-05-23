import styled from 'styled-components';
import { TypographyProps } from '../../interfaces';

export const StyledTypography = styled.div<TypographyProps>`
  ${({
    variant,
    fontSize,
    lineHeight,
    fontWeight,
    letterSpacing,
    theme: {
      typography: { title, subtitle, content, paragraph, defaultTypo },
    },
  }) => {
    switch (variant) {
      case 'title':
        return `
          font-size: ${fontSize ? `${fontSize}px` : title.fontSize};
          line-height: ${lineHeight ? `${lineHeight}px` : title.lineHeight};
          font-weight: ${fontWeight || title.fontWeight};
          letter-spacing: ${letterSpacing || title.letterSpacing};
          font-family: '-apple-system-headline', sans-serif;
          // TOODO: add font family from theme
        `;
      case 'subtitle':
        return `
          font-size: ${fontSize ? `${fontSize}px` : subtitle.fontSize};
          line-height: ${lineHeight ? `${lineHeight}px` : subtitle.lineHeight};
          font-weight: ${fontWeight || subtitle.fontWeight};
          letter-spacing: ${letterSpacing || subtitle.letterSpacing};
          font-family: '-apple-system-subheadline', sans-serif;
        `;
      case 'paragraph':
        return `
          font-size: ${fontSize ? `${fontSize}px` : paragraph.fontSize};
          line-height: ${lineHeight ? `${lineHeight}px` : paragraph.lineHeight};
          font-weight: ${fontWeight || paragraph.fontWeight};
          letter-spacing: ${letterSpacing || paragraph.letterSpacing};
          font-family: '-apple-system-body', sans-serif;
        `;
      case 'content':
        return `
          font-size: ${fontSize ? `${fontSize}px` : content.fontSize};
          line-height: ${lineHeight ? `${lineHeight}px` : content.lineHeight};
          font-weight: ${fontWeight || content.fontWeight};
          letter-spacing: ${letterSpacing || content.letterSpacing};
          font-family: '-apple-system-tall-body', sans-serif;
        `;
      default:
        return `
          font-size: ${fontSize ? `${fontSize}px` : defaultTypo.fontSize};
          line-height: ${
            lineHeight ? `${lineHeight}px` : defaultTypo.lineHeight
          };
          font-weight: ${fontWeight || defaultTypo.fontWeight};
          letter-spacing: ${letterSpacing || defaultTypo.letterSpacing};
          font-family: '-apple-system-tall-body', sans-serif;
        `;
    }
  }}
  ${({ bold }) =>
    bold &&
    `
    font-weight: 700;
  `}
  margin: ${({ margin }) =>
    margin && `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
  color: ${({ color }) => color || '#000'};
  text-align: ${({ align }) => align || 'left'};
`;
