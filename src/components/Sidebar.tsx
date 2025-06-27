import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Home, Info, Zap as Features, Rocket, Users, Mail, Phone, FileText, Award } from 'lucide-react';
import { gsap } from 'gsap';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'features', label: 'Features', icon: Features },
    { id: 'services', label: 'Services', icon: Rocket },
    { id: 'testimonials', label: 'Testimonials', icon: Users },
    { id: 'pricing', label: 'Pricing', icon: Award },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.sidebar-menu', 
        { x: -300, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
      gsap.fromTo('.sidebar-item', 
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleSidebar = () => {
    if (isOpen) {
      gsap.to('.sidebar-menu', {
        x: -300,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => setIsOpen(false)
      });
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Brand Logo */}
      <div className="fixed top-6 right-6 z-40 flex items-center space-x-2">
        <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
          <Zap className="h-6 w-6 text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          TechNova
        </span>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      {isOpen && (
        <div className="sidebar-menu fixed left-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-purple-500/20 z-50 overflow-y-auto">
          <div className="p-8">
            <div className="flex items-center space-x-3 mb-12 mt-8">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  TechNova
                </h2>
                <p className="text-gray-400 text-sm">Innovation Unleashed</p>
              </div>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="sidebar-item w-full flex items-center space-x-4 p-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 group"
                  >
                    <Icon className="h-5 w-5 group-hover:text-purple-400 transition-colors duration-200" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-12 p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-white font-semibold mb-2">Ready to Start?</h3>
              <p className="text-gray-300 text-sm mb-4">Join thousands of innovators already using TechNova.</p>
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;