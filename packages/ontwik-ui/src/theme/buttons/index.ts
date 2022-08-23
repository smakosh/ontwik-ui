import colors from "ontwik-ui/src/theme/colors";
import { StateAndColor } from "ontwik-ui/src/interfaces";

const buttons = {
  default: {
    fontSize: "12pt",
    borderRadius: "0.3rem",
  },
  sizes: {
    xlarge: `padding: 1rem 2rem;`,
    large: `padding: 0.7rem 2rem;`,
    medium: `padding: 0.4rem 1.8rem; font-size: 10pt;`,
    small: `padding: 0.3rem 1.6rem; font-size: 8pt;`,
  },
  primary: ({ state, bg, gradients }: StateAndColor) =>
    gradients
      ? `
    color: ${colors.white};
    background-image: ${
      state
        ? colors.stateColors[state]
        : `linear-gradient(to right, ${gradients[0]} 0%, ${gradients[1]} 50%, ${gradients[0]} 100%);`
    };
    background-size: 200% auto;
    border: none;

    &:hover {
      background-position: 100% 0;
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

export default buttons;
