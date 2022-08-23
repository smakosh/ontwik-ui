import styled from "styled-components";
import { ButtonProps } from "ontwik-ui/src/interfaces";

export const StyledButton = styled.button<ButtonProps>`
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  border-radius: ${({
    theme: {
      buttons: {
        default: { borderRadius },
      },
    },
  }) => borderRadius};
  font-size: ${({ theme }) => theme.buttons.default.fontSize};
  &:hover {
    transition: all 0.4s ease-in-out;
  }
  ${({ uppercase }) =>
    uppercase &&
    `
		text-transform: uppercase;
	`}

  ${({ wide }) =>
    wide &&
    `
      width: 100%;
      text-align: center;
      justify-content: center;
	`}

  ${({ icon }) =>
    icon &&
    `
    display: flex;
    align-items: center;
  `}

  ${({ iconPosition }) =>
    iconPosition === "right"
      ? `
      img, svg {
        margin-right: .5rem;
      }
    `
      : `
      flex-direction: row-reverse;
      img, svg {
        margin-left: .5rem;
      }
  `}

  ${({
    size,
    theme: {
      buttons: {
        sizes: { xlarge, large, medium, small },
      },
    },
  }) => {
    switch (size) {
      case "xlarge":
        return xlarge;
      case "large":
        return large;
      case "medium":
        return medium;
      case "small":
        return small;
      default:
        return null;
    }
  }}

  ${({
    variant,
    state,
    bg,
    borderColor,
    color,
    gradients,
    theme: {
      buttons: { primary, secondary, ghost },
    },
  }) => {
    switch (variant) {
      case "primary":
        return primary({ state, bg, gradients });
      case "secondary":
        return secondary({ state, borderColor });
      case "ghost":
        return ghost({ state, color });
      default:
        return primary({ state, bg, gradients });
    }
  }}

  &:disabled {
    background-color: ${({ theme }) => theme.colors.black[200]};
    color: ${({ theme }) => theme.colors.black[700]};
  }
`;
