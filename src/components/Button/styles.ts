import styled from 'styled-components';
import { ButtonProps } from '../../interfaces';

export const StyledButton = styled.button<ButtonProps>`
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  border-radius: ${({
    theme: {
      buttons: {
        default: { borderRadius },
      },
    },
  }) => borderRadius};
  font-size: ${({
    theme: {
      buttons: {
        default: { fontSize },
      },
    },
  }) => fontSize};

  &:hover {
    transition: 0.3s;
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
	`}

  ${({ icon }) =>
    icon &&
    `
    display: flex;
    align-items: center;
  `}

  ${({ iconPosition }) =>
    iconPosition === 'right'
      ? `
      img {
        margin-right: .5rem;
      }
    `
      : `
      flex-direction: row-reverse;
      img {
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
      case 'xlarge':
        return xlarge;
      case 'large':
        return large;
      case 'medium':
        return medium;
      case 'small':
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
    degree,
    theme: {
      buttons: { primary, secondary, ghost },
    },
  }) => {
    switch (variant) {
      case 'primary':
        return primary({ state, bg, gradients, degree });
      case 'secondary':
        return secondary({ state, borderColor });
      case 'ghost':
        return ghost({ state, color });
      default:
        return null;
    }
  }}

  &:disabled {
    background-color: ${({ theme }) => theme.colors.black[200]};
    color: ${({ theme }) => theme.colors.black[700]};
  }
`;
