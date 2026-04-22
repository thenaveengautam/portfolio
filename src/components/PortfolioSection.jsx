"use client";

import React from 'react';
import { mockData } from '../mockData';
import { ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="min-h-screen bg-[#0a0a0a] py-12 md:py-20 px-6 pb-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col items-start justify-between gap-4 mb-10 md:flex-row md:items-center md:mb-16 md:gap-0">
          <div className="flex items-center gap-4 md:ml-4">
            <span className="text-[#c4ff00] text-4xl font-light">03.</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0.4s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0.8s' }}></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
            </div>
          </div>
          <h2 className="font-serif text-3xl text-white md:text-5xl lg:text-7xl">Portfolio</h2>
        </div>

        {/* Projects list */}
        <div className="flex flex-col gap-10 md:gap-16">
          {mockData.portfolio.map((project) => (
            <div key={project.id}>
              {/* Mobile Card - Blog style (hidden on desktop) */}
              <article
                className="md:hidden group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 hover:border-[#c4ff00]/50 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="px-6 py-4 pb-5">
                  <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-[#c4ff00] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] text-gray-400 border rounded-full bg-white/5 border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project link */}
                  <button
                    onClick={() => window.open(project.url, '_blank')}
                    className="flex items-center gap-2 text-[#c4ff00] font-medium group-hover:gap-6 transition-all duration-300 cursor-pointer"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </button>
                </div>
              </article>

              {/* Desktop Card - Original horizontal layout (hidden on mobile) */}
              <div
                className="hidden md:flex flex-row bg-gradient-to-br transition-all duration-500 min-h-[220px] rounded-2xl overflow-hidden ml-4"
              >
                {/* LEFT — Content */}
                <div className="flex flex-col justify-start p-9 w-[30%] shrink-0 bg-[#000000] pt-8">
                  <span className="text-[#c4ff00] text-3xl font-semibold mb-8">
                    {project.category}
                  </span>
                  <h3 className="mb-4 text-lg font-semibold leading-snug text-white">
                    {project.title}
                  </h3>
                  <p className="mb-8 leading-relaxed text-gray-400 text-md">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-gray-400 border rounded-full bg-white/5 border-white/10 hover:border-[#c4ff00]/50 hover:text-[#c4ff00]/90 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT — Image */}
                <div className="relative flex-1 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full transition-transform duration-500 h-[450px] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/0 to-transparent" />
                  <div className="absolute inset-0 bg-[#000000]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#c4ff00] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ExternalLink
                        onClick={() => window.open(project.url, '_blank')}
                        className="text-black" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;