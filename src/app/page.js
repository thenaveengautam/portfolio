'use client';

import Navbar from '@/components/Navbar';
import Hero3D from '@/components/Hero3D';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

export default function Home() {
  return (
    <div className="bg-[#0a0a0a]">
      <Navbar />
      <Hero3D />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
}
