import React from 'react';
import { Zap, Twitter, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                TechNova
              </span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Pioneering the future of AI-driven technology solutions for businesses worldwide. 
              Transform your ideas into reality with cutting-edge innovation.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-purple-400 transition-colors duration-200 p-2 bg-white/5 rounded-lg hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-purple-400 transition-colors duration-200 p-2 bg-white/5 rounded-lg hover:bg-white/10">
                <Github className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-purple-400 transition-colors duration-200 p-2 bg-white/5 rounded-lg hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">About</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Press</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-purple-400" />
              <span className="text-gray-300">hello@technova.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-purple-400" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-purple-400" />
              <span className="text-gray-300">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 TechNova. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;