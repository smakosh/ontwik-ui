import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, OntwikProvider } from '../.';

const App = () => {
  return (
    <div>
      <OntwikProvider>
        <Button type="button" variant="primary" size="large">
          Test
        </Button>
      </OntwikProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
