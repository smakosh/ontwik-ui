import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, OntwikProvider } from '../.';
import ExampleIcon from './assets/example.svg';

const App = () => {
  return (
    <div>
      <OntwikProvider>
        <>
          <Button type="button" variant="primary" size="large" title="Test" />
          <Button
            icon={<img src={ExampleIcon} alt="test" />}
            iconPosition="left"
            type="button"
            variant="primary"
            size="large"
            title="Test"
          />
        </>
      </OntwikProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
