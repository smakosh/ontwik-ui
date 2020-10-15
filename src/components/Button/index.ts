import styled from 'styled-components';
import { ButtonProps } from '../../interfaces';

const Button = styled.button<ButtonProps>`
  text-decoration: none;
  border-radius: 0.3rem;
  cursor: pointer;
  font-size: 12pt;
	transition: 0.3s;
	color: ${({ color }) => color || '#000'};

  &:hover {
    transition: 0.3s;
	}
	
	${({ uppercase }) => uppercase && `
		text-transform: uppercase;
	`}

  ${({ wide }) =>
    wide &&
    `
      width: 100%;
      text-align: center;
	`}

  ${({
    variant,
    state,
    bg,
    borderColor,
    color,
    theme: {
      colors: { primary, white, stateColors },
    },
  }) => {
    switch (variant) {
      case 'ghost':
        return `
          color: ${state ? stateColors[state] : color};
					background: none;
					border: none;
				`;
      case 'primary':
        return `
					color: ${white};
					background: ${state ? stateColors[state] : (bg || primary[900])};
					border: 1px solid transparent;

					&:hover {
						background: ${state ? stateColors[state] : (bg || primary[700])};
					}
				`;
      case 'secondary':
        return `
					color: ${state ? stateColors[state] : (borderColor || primary[900])};
					background: ${white};
					border: ${state ? stateColors[state] : (borderColor || primary[900])} 1px solid;

					&:hover {
						background: ${state ? stateColors[state] : (borderColor || primary[900])};
						color: ${white};
						border-color: ${state ? stateColors[state] : (borderColor || primary[900])} 1px solid;
					}
				`;
      default:
        return null;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'xlarge':
        return `
					padding: 1rem 2rem;
				`;
      case 'large':
        return `
					padding: 0.7rem 2rem;
				`;
      case 'medium':
        return `
          padding: 0.4rem 1.8rem;
          font-size: 10pt;
        `;
      case 'small':
        return `
          padding: 0.3rem 1.6rem;
          font-size: 8pt;
        `;
      default:
        return null;
    }
  }}

  &:disabled {
    background-color: ${({ theme }) => theme.colors.black[200]};
    color: ${({ theme }) => theme.colors.black[700]};
  }
`;

export default Button;
