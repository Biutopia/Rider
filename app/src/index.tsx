import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'jotai';
import { GlobalStyles } from './styles/GlobalStyles';

ReactDOM.render(
  <Provider>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root')
);