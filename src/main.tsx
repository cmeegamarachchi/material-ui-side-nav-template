import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material';
import {theme} from './themes/default-theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </ThemeProvider>
      </StyledEngineProvider>
  </React.StrictMode>
)
