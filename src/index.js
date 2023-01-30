import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme  from 'styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="techgen-front">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);