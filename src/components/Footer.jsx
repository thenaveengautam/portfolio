"use client";

import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-12 px-6 pb-7">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 mb-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-semibold text-white transition-opacity duration-300 cursor-pointer textfont-medium ftracking-wider hover:opacity-100"
            >
              <span className="text-2xl font-black text-white">Naveen</span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#c4ff00] ml-1"></span>
            </button>
            <p className="pt-2 text-sm leading-relaxed text-gray-400">
              Crafting smart solutions that matter.<br />Let's create something amazing<br />together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-bold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-[#c4ff00] transition-colors duration-300 text-sm cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-[#c4ff00] transition-colors duration-300 text-sm cursor-pointer">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-[#c4ff00] transition-colors duration-300 text-sm cursor-pointer">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-[#c4ff00] transition-colors duration-300 text-sm cursor-pointer">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-bold text-white">Services</h4>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400 hover:text-[#c4ff00] transition-colors duration-300">Full Stack Web Development</li>
              <li className="text-sm text-gray-400 hover:text-[#c4ff00] transition-colors duration-300">Smart Website Solutions</li>
              <li className="text-sm text-gray-400 hover:text-[#c4ff00] transition-colors duration-300">AI-Powered Automation</li>
              <li className="text-sm text-gray-400 hover:text-[#c4ff00] transition-colors duration-300">REST API Development</li>
              <li className="text-sm text-gray-400 hover:text-[#c4ff00] transition-colors duration-300">Cloud Deployment</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 border-t border-white/10 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Naveen. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-gray-500">
            Made with<span className="text-lg">💛</span>by Naveen Gautam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;