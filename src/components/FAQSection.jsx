"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { mockData } from '../mockData';

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="min-h-screen bg-[#0a0a0a] py-12 md:py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-20 gap-4 md:gap-0">
          <div className="flex items-center gap-4">
            <span className="text-[#c4ff00] text-4xl font-light">05.</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0.4s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0.8s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '1.2s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '1.6s' }}></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white">FAQ</h2>
        </div>
        
        {/* <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-5xl text-white md:text-7xl">FAQ</h2>
          <p className="text-lg text-gray-400">Frequently asked questions</p>
        </div> */}

        {/* FAQ items */}
        <div className="space-y-4">
          {mockData.faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#c4ff00]/50"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex items-center justify-between w-full p-6 text-left cursor-pointer"
              >
                <h3 className="pr-4 text-lg font-semibold text-white">{faq.question}</h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#c4ff00]/10 flex items-center justify-center transition-colors duration-300 ${
                  openId === faq.id ? 'bg-[#c4ff00]' : ''
                }`}>
                  {openId === faq.id ? (
                    <Minus size={16} className="text-black" />
                  ) : (
                    <Plus size={16} className="text-[#c4ff00]" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-300 ${
                openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="leading-relaxed text-gray-400">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;