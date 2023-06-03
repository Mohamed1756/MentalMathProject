import React from 'react';
import './components/Header/Header.css';
import './components/Content/Content.css'
import './pages/Features.css'
import './pages/AboutPage.css'
import './pages/PricingPage.css'
import Header from './components/Header/Header';
import Content from './components/Content/Content'
import Features from './pages/Features';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import FAQPage from './pages/FAQPage';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Content/>
      <Features/>
      <AboutPage/>
      <PricingPage/>
      <FAQPage/>
      <Footer/>
    </Router>
  );
}

export default App;
