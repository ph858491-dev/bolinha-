import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, MapPin, Menu, X, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';
import { LINKS } from '../data/productData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 3, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8F0]/95 backdrop-blur-md py-3 px-4 sm:px-6 lg:px-8 border-b border-orange-100">
      {/* Top Banner Oferta Relâmpago */}
      <div className="max-w-7xl mx-auto mb-2 bg-[#FF7A00] text-white text-xs sm:text-sm font-bold py-2 px-4 rounded-2xl shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider">
              🔥 Oferta Especial
            </span>
            <span className="hidden sm:inline">Kits com até <strong>45% OFF</strong> no Mercado Livre e Shopee!</span>
            <span className="sm:hidden font-semibold">Até 45% OFF nos Kits!</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
            <div className="flex items-center gap-1 font-mono font-bold bg-black/20 px-2.5 py-0.5 rounded-full text-xs">
              <span>Termina em:</span>
              <span className="text-amber-200">
                {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
              </span>
            </div>
            <a
              href="#ofertas"
              className="inline-flex items-center gap-1 bg-white text-[#FF7A00] font-black px-3 py-1 rounded-full text-xs hover:bg-orange-50 transition-all shadow-xs"
            >
              Aproveitar
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Bento Navbar */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-orange-100">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-[#FF7A00] rounded-full flex items-center justify-center text-white font-black italic text-lg shadow-sm group-hover:scale-105 transition-transform">
              PS
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black text-[#2D2D2D] tracking-tighter uppercase font-['Outfit',sans-serif]">
                  Pet Show <span className="text-[#FF7A00]">Store</span>
                </span>
                <span className="text-[10px] bg-orange-100 text-[#FF7A00] font-extrabold px-2 py-0.5 rounded-full uppercase hidden sm:inline-block">
                  Cravo Pet
                </span>
              </div>
              <p className="text-[11px] text-gray-500 hidden md:block font-medium">
                Bolinhas Antistress & Saúde Bucal Canina
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <a href="#beneficios" className="hover:text-[#FF7A00] transition-colors">Qualidade</a>
            <a href="#depoimentos" className="hover:text-[#FF7A00] transition-colors">Depoimentos</a>
            <a href="#comparativo" className="hover:text-[#FF7A00] transition-colors">Diferenciais</a>
            <a href="#ofertas" className="text-[#FF7A00] hover:text-orange-700 flex items-center gap-1 transition-colors">
              <Sparkles className="w-3.5 h-3.5" />
              Kits Promocionais
            </a>
            <a href="#loja-fisica" className="hover:text-[#FF7A00] flex items-center gap-1 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              Localização
            </a>
            <a href="#redes-sociais" className="hover:text-[#FF7A00] transition-colors">Redes</a>
            <a href="#faq" className="hover:text-[#FF7A00] transition-colors">Dúvidas</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={LINKS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D2D2D] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-2 rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#ofertas"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-white bg-[#FF7A00] hover:bg-orange-600 px-4 py-2 rounded-xl shadow-md shadow-orange-500/20 hover:scale-[1.02] transition-all uppercase tracking-tight"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Comprar Agora</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#ofertas"
              className="text-xs font-bold text-white bg-[#FF7A00] px-3 py-1.5 rounded-lg shadow-xs"
            >
              Comprar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:bg-orange-50 rounded-lg"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <a
              href={LINKS.mercadoLivre}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 bg-yellow-400 hover:bg-yellow-500 text-stone-900 rounded-xl"
            >
              <span>Mercado Livre</span>
            </a>
            <a
              href={LINKS.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl"
            >
              <span>Shopee</span>
            </a>
          </div>

          <div className="space-y-2 text-sm font-medium text-stone-700 pt-1">
            <a
              href="#beneficios"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-amber-50"
            >
              Benefícios & Saúde Dental
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-amber-50"
            >
              Depoimentos de Clientes ⭐⭐⭐⭐⭐
            </a>
            <a
              href="#ofertas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg bg-amber-50 text-orange-700 font-bold"
            >
              Ver Kits Promocionais (Até 45% OFF)
            </a>
            <a
              href="#loja-fisica"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-amber-50"
            >
              Loja Física no Google Maps
            </a>
            <a
              href="#redes-sociais"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-amber-50"
            >
              Nossas Redes Sociais (Instagram, FB, Reddit, X)
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-amber-50"
            >
              Perguntas Frequentes
            </a>
          </div>

          <div className="pt-3 border-t border-stone-100">
            <a
              href={LINKS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 text-sm font-bold py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl shadow-xs"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chamar no WhatsApp (11 96572-4330)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
