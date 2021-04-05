import colors from '../colors';
import { StateAndColor } from '../../interfaces';

export default {
  default: {
    fontSize: '12pt',
    borderRadius: '0.3rem',
  },
  sizes: {
    xlarge: `padding: 1rem 2rem;`,
    large: `padding: 0.7rem 2rem;`,
    medium: `padding: 0.4rem 1.8rem; font-size: 10pt;`,
    small: `padding: 0.3rem 1.6rem; font-size: 8pt;`,
  },
  primary: ({ state, bg, gradients, degree = 90 }: StateAndColor) =>
    gradients
      ? `
    color: ${colors.white};
    background: ${
      state
        ? colors.stateColors[state]
        : `-moz-linear-gradient(${degree}deg, ${gradients[0]} 0%, ${gradients[1]} 100%)`
    };
    background: ${
      state
        ? colors.stateColors[state]
        : `-webkit-linear-gradient(${degree}deg, ${gradients[0]} 0%, ${gradients[1]} 100%)`
    };
    background: ${
      state
        ? colors.stateColors[state]
        : `linear-gradient(${degree}deg, ${gradients[0]} 0%, ${gradients[1]} 100%)`
    };
    filter: ${
      state
        ? 'unset'
        : `progid:DXImageTransform.Microsoft.gradient(startColorstr="${gradients[0]}",endColorstr="${gradients[1]}",GradientType=1)`
    };
    background-size: 120% auto;
    border: none;

    &:hover {
      background-position: ${degree}% center;
    }
  `
      : `
    color: ${colors.white};
    background: ${
      state ? colors.stateColors[state] : bg || colors.primary[900]
    };
    border: 1px solid transparent;

    &:hover {
      background: ${
        state ? colors.stateColors[state] : bg || colors.primary[700]
      };
    }
  `,
  secondary: ({ state, borderColor }: StateAndColor) => `
    color: ${
      state ? colors.stateColors[state] : borderColor || colors.primary[900]
    };
    background: ${colors.white};
    border: ${
      state ? colors.stateColors[state] : borderColor || colors.primary[900]
    } 1px solid;
    
    svg {
      stroke: ${colors.primary[900]};
      transition: .3s all;
    }

    &:hover {
      background: ${
        state ? colors.stateColors[state] : borderColor || colors.primary[900]
      };
      color: ${colors.white};
      border-color: ${
        state ? colors.stateColors[state] : borderColor || colors.primary[900]
      } 1px solid;

      svg {
        stroke: ${colors.white};
        transition: .3s all;
      }
    }
  `,
  ghost: ({ state, color }: StateAndColor) => `
    color: ${state ? colors.stateColors[state] : color};
    background: none;
    border: none;
  `,
};
