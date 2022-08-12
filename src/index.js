import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header/Header'
import Services from './components/Services/Services'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="index">
      <Header title="Goat Circuits"/>
      <Services />
      <About />
      <ContactUs />
      <Footer />
    </div>
  </React.StrictMode>
);
