import React from 'react';
import * as ReactDOM from 'react-dom';
import { Primary as Button } from '../stories/Button.stories';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
