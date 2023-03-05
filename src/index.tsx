import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { CartProvider } from 'context/cart';
import 'styles/styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Router>
          <App />
        </Router>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
