import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <React.StrictMode>
      <Home />
    </React.StrictMode>
    <Footer />
  </div>
);
