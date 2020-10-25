import colors from '../colors';
import { StateAndColor } from '../../interfaces';

export default {
  default: {
    fontSize: '12pt',
    borderRadius: '0.3rem',
  },
  primary: ({ state, bg }: StateAndColor) => `
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

    &:hover {
      background: ${
        state ? colors.stateColors[state] : borderColor || colors.primary[900]
      };
      color: ${colors.white};
      border-color: ${
        state ? colors.stateColors[state] : borderColor || colors.primary[900]
      } 1px solid;
    }
  `,
  ghost: ({ state, color }: StateAndColor) => `
    color: ${state ? colors.stateColors[state] : color};
    background: none;
    border: none;
  `,
  sizes: {
    xlarge: () => `padding: 1rem 2rem;`,
    large: () => `padding: 0.7rem 2rem;`,
    medium: () => `padding: 0.4rem 1.8rem; font-size: 10pt;`,
    small: () => `padding: 0.3rem 1.6rem; font-size: 8pt;`,
  },
};
