"use client";

import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { mockData } from '../mockData';

import Image from 'next/image';

const BlogSection = () => {
  return (
    <section id="blog" className="min-h-screen bg-[#0a0a0a] py-12 md:py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-20 gap-4 md:gap-0">
          <div className="flex items-center gap-4">
            <span className="text-[#c4ff00] text-4xl font-light">06.</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0.4s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0.8s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '1.2s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '1.6s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '2.0s' }}></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white">Latest Insights</h2>
        </div>

        {/* Blog posts grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          {mockData.blog.map((post) => (
            <article
              key={post.id}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 hover:border-[#c4ff00]/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-white/5">
                <Image
                  src={`/${post.image}`}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Category badge
              <div className="p-6 pb-0">
                <span className="inline-block px-3 py-1 bg-[#c4ff00]/10 border border-[#c4ff00]/30 rounded-full text-[#c4ff00] text-xs font-medium">
                  {post.category}
                </span>
              </div> */}

              {/* Content */}
              <div className="px-6 py-4 pb-5">
                <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-[#c4ff00] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">{post.excerpt}</p>

                {/* Meta info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read more link */}
                <button
                  onClick={() => window.open(post.url, '_blank')}
                  className="flex items-center gap-2 text-[#c4ff00] font-medium group-hover:gap-6 transition-all duration-300">
                  Read More
                  <ArrowRight
                    size={16}
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;