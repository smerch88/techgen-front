import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'styles/theme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from 'redux/store';
import { persistor } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename="techgen-front">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
