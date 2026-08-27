import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProofBar } from './components/SocialProofBar';
import { Benefits } from './components/Benefits';
import { ComparisonSection } from './components/ComparisonSection';
import { KitSelector } from './components/KitSelector';
import { Testimonials } from './components/Testimonials';
import { PhysicalStore } from './components/PhysicalStore';
import { SocialLinksSection } from './components/SocialLinksSection';
import { FaqSection } from './components/FaqSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50/20 text-stone-900 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Header with Urgency Timer & Navigation */}
      <Header />

      {/* Main Content */}
      <main className="grow">
        {/* High Conversion Hero Section */}
        <Hero />

        {/* Verified Social Proof Stats */}
        <SocialProofBar />

        {/* Dental & Behavioral Benefits */}
        <Benefits />

        {/* Comparison: Cheap Balls vs. Spiked Cravo Ball */}
        <ComparisonSection />

        {/* Product Kits & Direct Marketplace Checkout (Mercado Livre & Shopee) */}
        <KitSelector />

        {/* Customer Testimonials & Product Quality Reviews */}
        <Testimonials />

        {/* Physical Store & Google Maps Integration */}
        <PhysicalStore />

        {/* Social Media Channels (Facebook, Instagram, Reddit, X) */}
        <SocialLinksSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Complete Footer */}
      <Footer />
    </div>
  );
}
