import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './utils/global-styles';
import { appTheme } from './utils/app-theme';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';
const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={appTheme}>
    <Provider store={store}>
      <>
        <GlobalStyle />
        <App />
      </>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
