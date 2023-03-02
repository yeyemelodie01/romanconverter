import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom'
import Globalstyle from './utils/styles/globalstyle'
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'
import { ThemeProvider } from './utils/context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <Globalstyle />
        <Header />
          <Home />
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
