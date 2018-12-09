import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './utils/global-styles';
import { appTheme } from './utils/app-theme';

ReactDOM.render(
  <ThemeProvider theme={appTheme}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById('root')
);
