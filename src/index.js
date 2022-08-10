import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import reportWebVitals from './reportWebVitals';

import Header from './components/Header/Header'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="app">
      <Header title="Goat Circuits"/>
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
