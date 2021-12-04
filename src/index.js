import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./theme"
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import {BrowserRouter} from "react-router-dom"
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});
ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
        <div dir="rtl" >
        <BrowserRouter>
          <App />
          </BrowserRouter>
        </div>
      </CacheProvider>
    </ThemeProvider>,
  document.getElementById('root')
);
