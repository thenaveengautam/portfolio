"use client";

import React from 'react';
import { mockData } from '../mockData';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0a0a0a] px-6 py-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-10 gap-4 md:gap-0">
          <div className="flex items-center gap-4 md:ml-4">
            <span className="text-[#c4ff00] text-4xl font-light">01.</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0s' }}></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
            </div>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-white">Who I
            <span className="text-[#c4ff00]"> Am</span>
          </h2>
        </div>

        <div className="grid items-center gap-10 md:gap-16 mb-16 md:mb-24 md:grid-cols-2">
          {/* Left side - 3D Image */}
          <div className="relative md:ml-4">
            <div className="relative group">
              <img
                src="naveen.jpg"
                alt="Naveen Gautam"
                className="w-full transition-transform duration-500 transform grayscale rounded-2xl group-hover:scale-105 h-[280px] md:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#c4ff00]/1 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          {/* Right side - About text */}
          <div>
            {/* <h2 className="mb-8 font-serif text-5xl leading-tight text-white md:text-7xl">
              About{' '}
              <span className="text-[#c4ff00]">me</span>
            </h2> */}
            <p className="text-sm md:text-xl text-gray-200 leading-relaxed">
              Hi there! I am a Full-Stack Developer & AI Automation
              Engineer, I specialize in designing, developing, and deploying
              delivering real-world web and smart automation solutions
              for startups, businesses, and entrepreneurs. Over the years, I
              have successfully designed, developed, and deployed
              production-ready websites and applications that drive real
              results — more traffic, better conversions, and measurable
              growth. Beyond code, I build AI-powered automation
              systems using n8n and Zapier — connecting platforms,
              routing leads, triggering AI actions, and creating smart
              workflows that make your systems smarter, faster, and more
              scalable. I know what real-world development looks like —
              not just theory, not just tutorials — actual production
              projects with real users, real traffic, and real business
              impact.
            </p>
          </div>
        </div>

        <div className="grid items-center mb-16 md:mb-24 gap-10 md:gap-16 md:grid-cols-2">
          {/* Left side - About text */}
          <div className="md:ml-4">
            <h2 className="mb-6 md:mb-8 font-serif text-3xl md:text-5xl lg:text-7xl leading-tight text-white">
              Crafting{' '}
              <span className="text-[#c4ff00]">smart</span>{' '}
              <span className="text-[#c4ff00]">solutions</span> that drive results
            </h2>
            <p className="text-sm md:text-lg leading-relaxed text-gray-200">
              From idea to deployment, Crafting innovative web applications and automation workflows that saves time, reduces effort, scale your growth, and drive business success. From
              pixel-perfect frontends to rock-solid backends — every product I
              deliver is engineered to perform, convert, and grow. Whether you
              need a high-converting landing page, a full web app, or smart
              automations that run while you sleep.
            </p>
          </div>
          {/* Right side - 3D Image */}
          <div className="relative md:ml-2">
            <div className="relative group">
              <img
                src="/craft_sol.jpg"
                alt="Web & Automation Solutions"
                className="w-full transition-transform duration-500 transform rounded-2xl group-hover:scale-105 h-[250px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#c4ff00]/1 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-12 md:gap-20 mb-16 md:mb-28 md:grid-cols-[1.0fr_0.9fr]">
          {/* Left side - 3D Image */}
          <div className="relative order-2 md:ml-4 md:order-1">
            <div className="relative group">
              <img
                src="/website_dreams.jpg"
                alt="Transforming website dreams into digital reality"
                className="w-full transition-transform duration-500 transform rounded-2xl group-hover:scale-105 h-[250px] md:h-[400px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#c4ff00]/1 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          {/* Right side - About text */}
          <div className="order-1 md:order-2">
            <h2 className="mb-6 md:mb-8 md:ml-2 font-serif text-3xl md:text-5xl lg:text-7xl leading-tight text-white">
              Transforming your{' '}
              <span className="text-[#c4ff00]">website dreams</span> into a digital{' '}
              <span className="text-[#c4ff00]">reality</span>
            </h2>
            <p className="md:ml-2 text-sm md:text-lg leading-relaxed text-gray-200">
              As a next-generation full-stack developer, I don't just build websites —
              I craft powerful digital experiences that speak for your brand, engage
              your audience, and convert visitors into loyal customers. Because in today's digital world, your
              website isn't just a page — it's your most powerful business asset.
            </p>
          </div>
        </div>

        {/* Code Section */}
        <div className="grid items-start gap-10 md:gap-16 md:grid-cols-2">
          {/* Left side - Code heading and description */}
          <div className="md:ml-4">
            <h3 className="mb-6 md:mb-8 font-serif text-3xl md:text-5xl lg:text-7xl text-white">
              Turning ideas{' '}
              <span className="text-[#c4ff00]">into</span> reality{' '}
              <br className="hidden md:block" />
              through <span className="text-[#c4ff00]">code</span>
            </h3>
            <p className="mb-6 md:mb-8 text-sm md:text-lg leading-relaxed text-gray-200">
              {mockData.about.description}
            </p>

            {/* Technical Expertise */}
            <div className="space-y-8">
              <div>
                <h4 className="text-[#c4ff00] text-sm font-medium mb-4 tracking-wider">Frontend</h4>
                <div className="flex flex-wrap gap-3">
                  {mockData.about.technical.frontend.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 rounded-full text-white text-sm border border-white/10 hover:border-[#c4ff00]/70 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[#c4ff00] text-sm font-medium mb-4 tracking-wider">Backend</h4>
                <div className="flex flex-wrap gap-3">
                  {mockData.about.technical.backend.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 rounded-full text-white text-sm border border-white/10 hover:border-[#c4ff00]/70 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[#c4ff00] text-sm font-medium mb-4 tracking-wider">Database</h4>
                <div className="flex flex-wrap gap-3">
                  {mockData.about.technical.database.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 rounded-full text-white text-sm border border-white/10 hover:border-[#c4ff00]/70 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[#c4ff00] text-sm font-medium mb-4 tracking-wider">Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {mockData.about.technical.tools.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 rounded-full text-white text-sm border border-white/10 hover:border-[#c4ff00]/70 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[#c4ff00] text-sm font-medium mb-4 tracking-wider">Cloud & Services</h4>
                <div className="flex flex-wrap gap-3">
                  {mockData.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 rounded-full text-white text-sm border border-white/10 hover:border-[#c4ff00]/70 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[#c4ff00] text-sm font-medium mb-4 tracking-wider">Automation</h4>
                <div className="flex flex-wrap gap-3">
                  {mockData.about.technical.automation.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 rounded-full text-white text-sm border border-white/10 hover:border-[#c4ff00]/70 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Experience Timeline */}
          <div>
            <div className="relative mb-12 group">
              <img
                src="/code_reality.png"
                alt="Turning ideas into reality through code"
                className="w-full transition-transform duration-500 transform rounded-2xl group-hover:scale-105 h-[250px] md:h-[370px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/1 to-transparent rounded-2xl"></div>
            </div>

            <div className="space-y-8">
              {mockData.experience.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-white/10 hover:border-[#c4ff00]/30 transition-all duration-300">
                  {/* Timeline dot */}
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${exp.active
                    ? 'bg-gray-700 border-gray-600'
                    : 'bg-gray-700 border-gray-600'
                    }`}></div>

                  <div className="pb-8">
                    <span className="text-[#c4ff00] text-sm font-medium">{exp.year}</span>
                    <h4 className="mt-2 text-xl font-semibold text-white">{exp.role}</h4>
                    <p className="mt-2 mb-2 text-sm text-gray-400">{exp.company}</p>
                    <p className="leading-relaxed text-gray-200">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
