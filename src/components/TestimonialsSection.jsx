"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../mockData';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="min-h-screen bg-[#0a0a0a] py-12 md:py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-20 gap-4 md:gap-0">
          <div className="flex items-center gap-4">
            <span className="text-[#c4ff00] text-4xl font-light">04.</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0.4s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0.8s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '1.2s' }}></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white">Testimonials</h2>
        </div>

        {/* <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-5xl text-white md:text-7xl">Client Feedback</h2>
          <p className="text-lg text-gray-400">What people say about working with me</p>
        </div> */}

        {/* Testimonials grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          {mockData.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-7 border border-white/10 hover:border-[#c4ff00]/50 transition-all duration-500 group pb-6"
            >
              {/* Quote icon */}
              <div className="absolute transition-opacity duration-300 top-2.5 right-8 opacity-20 group-hover:opacity-80">
                <Quote size={60} className="text-[#c4ff00]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#c4ff00] text-[#c4ff00]" />
                ))}
              </div>

              {/* Content */}
              <p className="relative z-10 mb-6 leading-relaxed text-gray-300">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#c4ff00]/20 to-[#c4ff00]/5 rounded-full flex items-center justify-center border border-[#c4ff00]/30">
                  <span className="text-[#c4ff00] font-semibold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;