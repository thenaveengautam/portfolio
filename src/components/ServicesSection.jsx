"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { mockData } from '../mockData';

const ServicesSection = () => {
  return (
    <section id="services" className="min-h-screen bg-[#0a0a0a] pt-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-4">
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
          <h2 className="font-serif text-5xl text-white md:text-7xl">What I Offer</h2>
        </div>

        {/* Service grid */}
        <div className="relative flex mb-32">
          {/* Left side - About text */}
          <div className="ml-2 mr-12">
            <h2 className="mb-8 font-serif text-5xl leading-tight text-white md:text-5xl">
              Automated{' '}
              <span className="text-[#c4ff00]">Website</span>
            </h2>
            <p className="leading-relaxed text-gray-200 mb-14 text-md">
              I build smart, automated websites that work for your<br />
              business 24/7 capturing leads, engaging visitors, and<br />
              driving growth while you focus on what matters most.<br />
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
                className="w-full transition-transform duration-500 transform rounded-2xl h-[400px] object-cover group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#c4ff00]/1 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Service grid */}
        <div className="relative flex mb-32">
          {/* Left side - 3D Image */}
          <div className="relative mx-2 absolute-right-0">
            <div className="relative group">
              <img
                src="web_develop.jpg"
                alt="Web Development"
                className="w-full transition-transform duration-500 transform h-[400px] object-cover rounded-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#c4ff00]/1 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          {/* Right side - About text */}
          < div className="ml-10" >
            <h2 className="mb-8 font-serif text-5xl leading-tight text-white md:text-5xl">
              Web{' '}
              <span className="text-[#c4ff00]">Development</span>
            </h2>
            <p className="leading-relaxed text-gray-200 mb-14 text-md">
              Crafting innovative web development solutions that<br />
              turn your vision into reality built to scale, designed<br />
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
        <div className="relative flex mb-20">
          {/* Left side - About text */}
          <div className="ml-2 mr-12">
            <h2 className="mb-8 font-serif text-5xl leading-tight text-white md:text-5xl">
              AI{' '}
              <span className="text-[#c4ff00]">Automation</span>
            </h2>
            <p className="leading-relaxed text-gray-200 mb-14 text-md">
              Building intelligent automation systems that work for<br />
              your business 24/7 eliminating repetitive tasks,<br />
              connecting your tools, and delivering real results<br />
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
                className="w-full transition-transform duration-500 transform rounded-2xl h-[400px] object-cover group-hover:scale-105"
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