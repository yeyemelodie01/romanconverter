import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next'

import Globalstyle from './utils/styles/globalstyle'
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'
import { ThemeProvider } from './utils/context'
import i18next from './utils/translate'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <ThemeProvider>
        <Globalstyle />
        <I18nextProvider i18n={i18next}>
          <Header />
          <Home />
          <Footer />
        </I18nextProvider>
      </ThemeProvider>
    </>
);
