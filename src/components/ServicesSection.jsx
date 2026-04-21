"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { mockData } from '../mockData';

const ServicesSection = () => {
  return (
    <section id="services" className="min-h-screen bg-[#0a0a0a] pt-12 md:pt-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-20 gap-4 md:gap-0">
          <div className="flex items-center gap-4 ml-4">
            <span className="text-[#c4ff00] text-4xl font-light">02.</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0.4s' }}></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white">What I Offer</h2>
        </div>

        {/* Service grid */}
        <div className="relative flex flex-col md:flex-row mb-16 md:mb-32 gap-8 md:gap-4">
          {/* Left side - About text */}
          <div className="md:ml-4 md:mr-12">
            <h2 className="mb-8 font-serif text-4xl md:text-5xl leading-tight text-white">
              Automate{' '}
              <span className="text-[#c4ff00]">Website</span>
            </h2>
            <p className="leading-relaxed text-gray-200 mb-14 text-md">
              I build smart, automated websites that work for your<br className="hidden md:block" />
              business 24/7 capturing leads, engaging visitors, and<br className="hidden md:block" />
              driving growth while you focus on what matters most.
            </p>
            <ul className="space-y-5">
              {[
                "AI-powered lead capture + automatic CRM sync",
                "24/7 intelligent chatbot — engages + converts visitors",
                "Automated email sequences — from signup to sale",
                "Mobile-optimized + lightning fast performance",
                "Smart analytics + automated performance reporting"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-200">
                  <div className="flex items-center justify-center">
                    <Check className="text-[#c4ff00]" size={15} />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right side - 3D Image */}
          <div className="relative absolute-right-0">
            <div className="relative group">
              <img
                src="automated_web.jpg"
                alt="Automated Website"
                className="w-full md:w-[740px] transition-transform duration-500 transform rounded-2xl h-[250px] md:h-[430px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#c4ff00]/1 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Service grid */}
        <div className="relative flex flex-col md:flex-row mb-16 md:mb-32 gap-8 md:gap-4">
          {/* Left side - 3D Image */}
          <div className="relative md:mx-2 md:absolute-right-0 order-2 md:order-1">
            <div className="relative group ml-2">
              <img
                src="web_develop.jpg"
                alt="Web Development"
                className="w-full md:w-[730px] transition-transform duration-500 transform h-[250px] md:h-[430px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#c4ff00]/1 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          {/* Right side - About text */}
          <div className="md:ml-10 order-1 md:order-2">
            <h2 className="mb-8 font-serif text-4xl md:text-5xl leading-tight text-white">
              Web{' '}
              <span className="text-[#c4ff00]">Development</span>
            </h2>
            <p className="leading-relaxed text-gray-200 mb-16 text-md">
              Crafting innovative web development solutions that<br className="hidden md:block" />
              turn your vision into reality built to scale, designed<br className="hidden md:block" />
              to convert, and to drive real business results.
            </p>
            <ul className="space-y-5">
              {[
                "Custom full-stack web application development",
                "Pixel-perfect UI with seamless backend integration",
                "Secure REST APIs + third-party integrations",
                "Authentication, payments & database architecture",
                "Cloud deployment + performance optimization"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-200">
                  <div className="flex items-center justify-center">
                    <Check className="text-[#c4ff00]" size={15} />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service grid */}
        <div className="relative flex flex-col md:flex-row mb-12 md:mb-20 gap-8 md:gap-4">
          {/* Left side - About text */}
          <div className="md:ml-4 md:mr-12">
            <h2 className="mb-8 font-serif text-4xl md:text-5xl leading-tight text-white">
              AI{' '}
              <span className="text-[#c4ff00]">Automation</span>
            </h2>
            <p className="leading-relaxed text-gray-200 mb-14 text-md">
              Building intelligent automation systems that work for<br className="hidden md:block" />
              your business 24/7 eliminating repetitive tasks,<br className="hidden md:block" />
              connecting your tools, and delivering real results<br className="hidden md:block" />
              while you sleep.
            </p>
            <ul className="space-y-5">
              {[
                "Intelligent workflow automation — zero manual effort",
                "n8n + Zapier — multi-app workflow orchestration",
                "Smart chatbot — 24/7 visitor engagement + lead routing",
                "Cross-platform integrations — all tools connected",
                "Real-time event triggers + automated action pipelines"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-200">
                  <div className="flex items-center justify-center">
                    <Check className="text-[#c4ff00]" size={15} />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right side - 3D Image */}
          <div className="relative absolute-right-0">
            <div className="relative group">
              <img
                src="automation.jpg"
                alt="Automation"
                className="w-full md:w-[740px] transition-transform duration-500 transform rounded-2xl h-[250px] md:h-[430px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#c4ff00]/1 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default ServicesSection;