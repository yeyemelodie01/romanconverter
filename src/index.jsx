import React from 'react';
import ReactDOM from 'react-dom/client';
import Globalstyle from './utils/styles/globalstyle'
import Home from './pages/home'

import Header from './components/header'
import Footer from './components/footer'
import { ThemeProvider } from './utils/context'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <ThemeProvider>
        <Globalstyle />
        <Header />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
);
