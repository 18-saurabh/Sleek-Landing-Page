import React from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import GetStartedSection from './components/GetStartedSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Sidebar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <ContactSection />
      <GetStartedSection />
      <Footer />
    </div>
  );
}

export default App;