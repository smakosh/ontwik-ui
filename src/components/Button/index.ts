import styled from 'styled-components';
import { ButtonProps } from '../../interfaces';

const Button = styled.button<ButtonProps>`
	text-decoration: none;
	text-transform: uppercase;
	border-radius: 0.3rem;
	cursor: pointer;
	font-size: 12pt;
	transition: 0.3s;

	&:hover {
		transition: 0.3s;
	}

	${({ wide }) =>
    wide &&
    `
      width: 100%;
      text-align: center;
	`}

	${({
    variant,
    state,
    theme: {
      colors: { primary, secondary, white, stateColors },
    },
  }) => {
    switch (variant) {
      case 'blank':
        return `
					background: none;
					border: none;
					color: ${stateColors['danger']};
				`;
      case 'cta':
        return `
					color: ${white};
					background: ${state ? stateColors[state] : secondary[900]};
					border: 1px solid transparent;

					&:hover {
						background: ${state ? stateColors[state] : secondary[700]};
					}
				`;
      case 'primary':
        return `
					color: ${white};
					background: ${state ? stateColors[state] : primary[900]};
					border: 1px solid transparent;

					&:hover {
						background: ${state ? stateColors[state] : primary[700]};
					}
				`;
      case 'secondary':
        return `
					color: ${state ? stateColors[state] : primary[900]};
					background: ${white};
					border: ${state ? stateColors[state] : primary[900]} 1px solid;

					&:hover {
						background: ${state ? stateColors[state] : primary[900]};
						color: ${white};
						border-color: ${state ? stateColors[state] : primary[900]} 1px solid;
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
