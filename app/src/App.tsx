import React from 'react';
import ExampleComponent from './components/ExampleComponent';
import { GlobalStyles } from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <ExampleComponent />
    </>
  );
};

export default App;