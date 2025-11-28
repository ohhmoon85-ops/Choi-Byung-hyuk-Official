import React, { useState } from 'react';
import { Menu, X, Facebook, Twitter, Linkedin, Mail, Globe } from 'lucide-react';
import { PageType } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageType;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, content } = useLanguage();

  const navigate = (page: PageType) => {
    window.location.hash = page;
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white">
      {/* Header */}
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => navigate(PageType.HOME)}
            >
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-navy-900 tracking-wide">
                  CHOI BYUNG HYUK
                </span>
                <span className="text-xs text-gold-500 font-medium tracking-[0.2em] uppercase">
                  Strategist & Diplomat
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {content.nav.map((item) => (
                <button
                  key={item.page}
                  onClick={() => navigate(item.page)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.page
                      ? 'text-navy-900 border-b-2 border-gold-500'
                      : 'text-gray-500 hover:text-navy-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Language Switcher */}
              <div className="h-6 w-px bg-gray-300 mx-2"></div>
              <button 
                onClick={toggleLanguage}
                className="flex items-center text-sm font-medium text-gray-500 hover:text-navy-900 transition-colors"
              >
                <Globe size={16} className="mr-1" />
                <span className={language === 'ko' ? 'font-bold text-navy-900' : ''}>KO</span>
                <span className="mx-1">/</span>
                <span className={language === 'en' ? 'font-bold text-navy-900' : ''}>EN</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
               <button 
                onClick={toggleLanguage}
                className="flex items-center text-sm font-medium text-navy-900"
              >
                <span className={language === 'ko' ? 'font-bold' : 'text-gray-500'}>KO</span>
                <span className="mx-1">/</span>
                <span className={language === 'en' ? 'font-bold' : 'text-gray-500'}>EN</span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-navy-900 hover:text-gold-500 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {content.nav.map((item) => (
                <button
                  key={item.page}
                  onClick={() => navigate(item.page)}
                  className={`block w-full text-left px-3 py-4 text-base font-medium ${
                    currentPage === item.page
                      ? 'text-navy-900 bg-gray-50 border-l-4 border-gold-500'
                      : 'text-gray-600 hover:text-navy-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Identity */}
            <div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">CHOI BYUNG HYUK</h3>
              <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                {content.footer.desc}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-gold-500 font-medium mb-4 uppercase text-sm tracking-wider">{content.footer.quickLinks}</h4>
              <ul className="space-y-2">
                {content.nav.map((item) => (
                  <li key={item.page}>
                    <button 
                      onClick={() => navigate(item.page)}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-gold-500 font-medium mb-4 uppercase text-sm tracking-wider">{content.footer.contact}</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400 text-sm">
                  <Mail size={16} className="mr-2" />
                  <span>official@choibyunghyuk.kr</span>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Choi Byung-hyuk. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
