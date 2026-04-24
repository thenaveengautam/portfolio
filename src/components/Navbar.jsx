"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { mockData } from '../mockData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // 1. Navbar background state on scroll
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setIsScrolled(window.scrollY > 50);

    // 2. Track Active Section using IntersectionObserver (highly performant)
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section hits the middle of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Check if wait for DOM load is needed - but since it's Next.js client component it's likely fine
    setTimeout(() => {
      const sections = mockData.navigation.map(item => item.id);
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
      <div className="px-4 md:px-6 py-4 mx-auto font-semibold max-w-7xl w-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-semibold text-white transition-opacity duration-300 cursor-pointer textfont-medium ftracking-wider hover:opacity-100"
          >
            <span className="ml-2 text-2xl font-black text-white">Naveen</span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#c4ff00] ml-1"></span>
          </button>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-8 md:flex">
            {mockData.navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm tracking-wide transition-colors duration-300 cursor-pointer ${activeSection === item.id ? 'text-[#c4ff00]' : 'text-white hover:text-[#c4ff00]'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-white cursor-pointer md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="py-6 mt-4 border-t md:hidden border-white/10 bg-black/95 backdrop-blur-xl rounded-b-2xl">
            <div className="flex flex-col gap-1">
              {mockData.navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left text-base tracking-wide py-3 px-4 rounded-xl transition-all duration-300 cursor-pointer ${activeSection === item.id ? 'text-[#c4ff00] bg-[#c4ff00]/10 font-medium' : 'text-white/80 hover:text-[#c4ff00] hover:bg-white/5'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
