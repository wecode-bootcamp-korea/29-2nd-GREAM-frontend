import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import theme from './styles/theme';
import GlobalStyle from './styles/Global';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
