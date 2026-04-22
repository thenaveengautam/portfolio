"use client";

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Pre-generate stable particle data outside the component
// Using deterministic values based on index to avoid SSR/client hydration mismatch
const PARTICLES = Array.from({ length: 0 }).map((_, i) => ({
  left: `${(i * 137.508) % 100}%`,
  top: `${(i * 97.312) % 100}%`,
  duration: `${5 + (i * 0.7) % 1}s`,
  delay: `${(i * 0.3) % 5}s`,
}));

const Hero3D = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    let ticking = false;
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth - 0.5) * 20;
          const y = (e.clientY / window.innerHeight - 0.5) * 20;
          setMousePosition({ x, y });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-16 md:pt-0">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(196, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(196, 255, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Background"
          className="object-cover w-full h-full"
          style={{
            transform: `translate(${mousePosition.x * 2.5}px, ${mousePosition.y * 2.5}px) scale(1.1)`
          }}
        />
      </div>

      {/* Floating particles - only rendered client-side after mount to avoid hydration mismatch */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {PARTICLES.map((p, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#c4ff00] rounded-full opacity-20"
              style={{
                left: p.left,
                top: p.top,
                animation: `particle-float ${p.duration} ease-in-out infinite`,
                animationDelay: p.delay
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>



      {/* Bottom left text */}
      <div className="absolute z-20 left-8 bottom-8">
        <p className="max-w-xs text-sm text-white hover:text-[#c4ff00]">
        </p>
      </div>

      {/* Content */}
      <div className={`relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>

        {/* Top Content Group - Shifted Upwards */}
        <div className="-translate-y-6 md:-translate-y-10 flex flex-col items-center w-full">
          {/* Available for work badge */}
          <div className="mb-6 md:mb-8 mt-8">
            <p className="text-[#c4ff00] text-md font-medium tracking-wider flex items-center justify-center gap-2 px-4 py-2">
              <span className="w-2 h-2 bg-[#c4ff00] rounded-full animate-pulse"></span>
              AVAILABLE FOR WORK
            </p>
          </div>

          {/* Main heading with 3D depth */}
          <div 
            className="mb-2 md:mb-8 transition-transform duration-200 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0}deg) rotateY(${mousePosition.x * 0}deg)`,
            }}
          >
            <h1 className="font-serif text-5xl md:text-8xl lg:text-[9rem] leading-[1.1] whitespace-nowrap tracking-tight flex items-center justify-center gap-3 md:gap-6 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-100 to-gray-400">
                Naveen
              </span>
              <span className="text-[#c4ff00]">
                Gautam
              </span>
            </h1>
          </div>

          {/* Subtitle pulled close to the heading */}
          <p className="mb-10 md:mb-12 max-w-2xl mx-auto text-white/70 text-base md:text-2xl font-light leading-relaxed px-4"
            style={{ textShadow: '0 4px 15px rgba(0,0,0,1)' }}>
            Hi there! I'm a Software Engineer crafting innovative web and automation solutions that drive <span className="font-medium text-white">real results</span>.
          </p>
        </div>

        {/* CTA Button with 3D effect */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative px-7 py-4 bg-[#c4ff00] text-black rounded-full font-medium overflow-hidden cursor-pointer"
            style={{
              transform: 'translateZ(60px)',
              boxShadow: '0 10px 40px rgba(196, 255, 0, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateZ(80px) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateZ(60px) scale(1)';
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 bg-black rounded-md">
                <span className="grid grid-cols-2 gap-0.5">
                  <span className="w-1 h-1 bg-[#c4ff00] rounded-sm"></span>
                  <span className="w-1 h-1 bg-[#c4ff00] rounded-sm"></span>
                  <span className="w-1 h-1 bg-[#c4ff00] rounded-sm"></span>
                  <span className="w-1 h-1 bg-[#c4ff00] rounded-sm"></span>
                </span>
              </span>
              <span>Start your Project</span>
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-4" size={20} />
            </span>

            {/* Animated background */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#d4ff20] to-[#c4ff00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
