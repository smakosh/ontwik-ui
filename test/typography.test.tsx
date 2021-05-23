import React from 'react';
import * as ReactDOM from 'react-dom';
import { Title as Typography } from '../stories/Typography.stories';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Typography variant="title" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
