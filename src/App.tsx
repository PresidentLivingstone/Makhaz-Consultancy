import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Scholarships from './components/Scholarships';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Scholarships />
      <Packages />
      <Testimonials />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;