"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Check } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_izuek0q';
const TEMPLATE_ID = 'template_8dc4vv6';
const PUBLIC_KEY = 'I5YvE8LM4ihve5Ljm';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('contact@trynaveen.com');
    setIsCopied(true);
    toast.success("Email copied to clipboard!", {
      style: {
        background: '#1a1a1a',
        border: '1px solid #c4ff00',
        color: '#ffffff',
      },
    });
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        PUBLIC_KEY
      );

      toast.success("Message Sent!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
        style: {
          background: '#1a1a1a',
          border: '1px solid #c4ff00',
          color: '#ffffff',
        },
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to send message", {
        description: "Something went wrong. Please try again.",
        style: {
          background: '#1a1a1a',
          border: '1px solid #ff4444',
          color: '#ffffff',
        },
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-[#0a0a0a] py-12 md:py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-20 gap-4 md:gap-0">
          <div className="flex items-center gap-4">
            <span className="text-[#c4ff00] text-4xl font-light">07.</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0.4s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '0.8s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '1.2s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '1.6s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '2.0s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#c4ff00]" style={{ animation: 'dotPulse 2s infinite', animationDelay: '2.4s' }}></div>
            </div>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-white">Let's Connect</h2>
        </div>

        {/* <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-5xl text-white md:text-7xl">Let's Connect</h2>
          <p className="text-lg text-gray-400">Have a project in mind? Let's make it happen</p>
        </div> */}

        <div className="grid gap-10 md:gap-12 grid-cols-1 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-white">Get in Touch</h3>
              <p className="mb-8 leading-relaxed text-gray-400">
                Have a project in mind or want to discuss how I can help
                your business grow? I'm just one message away — let's
                turn your idea into reality.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <div
                onClick={handleCopyEmail}
                className={`flex items-center gap-4 p-4 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl border transition-all duration-300 group cursor-pointer ${isCopied ? 'border-[#c4ff00] bg-[#c4ff00]/5' : 'border-white/10 hover:border-[#c4ff00]/30'}`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${isCopied ? 'bg-[#c4ff00]' : 'bg-[#c4ff00]/10 group-hover:bg-[#c4ff00]'}`}>
                  {isCopied ? (
                    <Check className="text-black" size={20} />
                  ) : (
                    <Mail className="text-[#c4ff00] group-hover:text-black" size={20} />
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className={`transition-colors duration-300 ${isCopied ? 'text-[#c4ff00] font-medium' : 'text-white'}`}>
                    {isCopied ? 'Copied to clipboard!' : 'contact@trynaveen.com'}
                  </p>
                </div>
              </div>

              <a
                href="tel:+919412489412"
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl border border-white/10 hover:border-[#c4ff00]/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#c4ff00]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c4ff00] transition-colors duration-300">
                  <Phone className="text-[#c4ff00] group-hover:text-black" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-white">+91 94124 89412</p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Chandausi,India"
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl border border-white/10 hover:border-[#c4ff00]/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#c4ff00]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c4ff00] transition-colors duration-300">
                  <MapPin className="text-[#c4ff00] group-hover:text-black" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white">Chandausi, India</p>
                </div>
              </a>

              {/* <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl border border-white/10">
                <div className="w-12 h-12 bg-[#c4ff00]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-[#c4ff00]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white">Chandausi, India</p>
                </div>
              </div> */}
            </div>

            {/* Social links */}
            <div>
              <p className="mb-4 text-gray-500 text-md">Connect with me</p>
              <div className="flex gap-3">
                <a href="https://x.com/thenaveengautam" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#c4ff00] hover:bg-[#c4ff00]/10 transition-all duration-300 cursor-pointer">
                  <Twitter className="text-white" size={20} />
                </a>
                <a href="https://www.instagram.com/iamnaveen._" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#c4ff00] hover:bg-[#c4ff00]/10 transition-all duration-300 cursor-pointer">
                  <Instagram className="text-white" size={20} />
                </a>
                <a href="https://www.linkedin.com/in/thenaveengautam/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#c4ff00] hover:bg-[#c4ff00]/10 transition-all duration-300 cursor-pointer">
                  <Linkedin className="text-white" size={20} />
                </a>
                <a href="https://github.com/thenaveengautam" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#c4ff00] hover:bg-[#c4ff00]/10 transition-all duration-300 cursor-pointer">
                  <Github className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-6 md:p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c4ff00] transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c4ff00] transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm text-gray-400">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c4ff00] transition-colors duration-300"
                  placeholder="What can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm text-gray-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c4ff00] transition-colors duration-300 resize-none"
                  placeholder="Describe your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-[#c4ff00] text-black font-medium px-6 py-4 rounded-lg hover:bg-[#d4ff20] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {isSending ? 'Sending...' : 'Send Message'}
                <Send size={18} className="transition-transform duration-300 group-hover:translate-x-9" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;