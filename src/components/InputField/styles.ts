import styled from 'styled-components';

export const Wrapper = styled.div<{
  relative?: boolean;
  error?: string | boolean;
}>`
  padding: 1rem 0;

  ${({ relative }) =>
    relative &&
    `
			position: relative;
	`}

  input, textarea, select {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    text-align: left;
    -webkit-appearance: none;
    transition: all 0.2s ease 0s;
    border-width: 1px;
    border-color: #191847;
    border-style: solid;
    border-radius: 2px;
    padding: 0.9rem 1rem;
    font-size: 12pt;
    resize: unset;

    ${({ error }) =>
      error &&
      `
			border-color: red;
	`}
  }
`;

export const Label = styled.label`
  margin-bottom: 1rem;
`;
