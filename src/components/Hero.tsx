import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, Truck, ArrowRight, Heart, Sparkles, CheckCircle2, MessageCircle, Play } from 'lucide-react';
import { LINKS } from '../data/productData';

export const Hero: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [notificationIndex, setNotificationIndex] = useState(0);

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=85',
      caption: 'Diversão garantida & alívio instantâneo do estresse canino'
    },
    {
      url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=85',
      caption: 'Material flexível atóxico que massageia a gengiva e dentes'
    },
    {
      url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=85',
      caption: 'Cores vibrantes de alto contraste para todos os portes'
    }
  ];

  const recentBuyers = [
    { name: 'Fernanda R.', city: 'São Paulo - SP', item: 'Kit 12 Bolinhas Cravo', time: 'há 2 minutos', platform: 'Mercado Livre' },
    { name: 'Marcos S.', city: 'Curitiba - PR', item: 'Kit 6 Bolinhas Coloridas', time: 'há 6 minutos', platform: 'Shopee' },
    { name: 'Camila P.', city: 'Belo Horizonte - MG', item: 'Kit 12 Bolinhas Cravo', time: 'há 11 minutos', platform: 'Mercado Livre' },
    { name: 'Roberto M.', city: 'Rio de Janeiro - RJ', item: 'Kit 12 Bolinhas Cravo', time: 'há 15 minutos', platform: 'Shopee' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNotificationIndex((prev) => (prev + 1) % recentBuyers.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [recentBuyers.length]);

  return (
    <section className="relative overflow-hidden pt-4 sm:pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Main Large Bento Tile (8 cols): Hero Headline, Copy, Core Bullets & CTAs */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-orange-100 flex flex-col justify-between">
            <div className="space-y-5">
              
              {/* Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#FF7A00] text-white text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full">
                  🐾 Anti-Stress & Saúde Bucal
                </span>
                <div className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full text-xs font-bold text-[#2D2D2D]">
                  <span className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </span>
                  <span>4.9/5 (+15.400 pets)</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D2D2D] tracking-tight leading-[1.12] uppercase font-['Outfit',sans-serif]">
                A Bolinha Cravo que <span className="text-[#FF7A00]">elimina o tédio</span>, acalma e limpa os dentes!
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                Borracha maciça atóxica ultra resistente com cravos massageadores. Proporciona gasto de energia saudável, combate o tártaro e evita que seu pet destrua móveis e sapatos.
              </p>

              {/* Bullet Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-[#2D2D2D] text-sm font-bold bg-[#FFF8F0] p-2.5 rounded-xl border border-orange-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Alívio rápido de estresse</span>
                </div>
                <div className="flex items-center gap-2 text-[#2D2D2D] text-sm font-bold bg-[#FFF8F0] p-2.5 rounded-xl border border-orange-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ação anti-tártaro natural</span>
                </div>
                <div className="flex items-center gap-2 text-[#2D2D2D] text-sm font-bold bg-[#FFF8F0] p-2.5 rounded-xl border border-orange-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Atóxica e sem BPA</span>
                </div>
                <div className="flex items-center gap-2 text-[#2D2D2D] text-sm font-bold bg-[#FFF8F0] p-2.5 rounded-xl border border-orange-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pulo dinâmico e flexível</span>
                </div>
              </div>
            </div>

            {/* Quick Marketplace Action Cards */}
            <div className="pt-6 mt-6 border-t border-orange-100">
              <p className="text-xs uppercase font-black tracking-wider text-gray-500 mb-3">
                Compre com segurança e envio imediato:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Mercado Livre Tile */}
                <a
                  href={LINKS.mercadoLivre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 bg-[#FFE600] hover:bg-[#ebd300] text-[#2D2D2D] rounded-2xl font-black shadow-sm transition-all hover:scale-[1.02] border border-yellow-400"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">🤝</span>
                    <div className="text-left">
                      <div className="text-xs uppercase tracking-tight font-extrabold">Mercado Livre</div>
                      <div className="text-[11px] text-gray-800 font-semibold flex items-center gap-1">
                        <Truck className="w-3 h-3 text-emerald-700" />
                        Envio Full • 45% OFF
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-800 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Shopee Tile */}
                <a
                  href={LINKS.shopee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 bg-[#EE4D2D] hover:bg-[#d83c1d] text-white rounded-2xl font-black shadow-sm transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">🛍️</span>
                    <div className="text-left">
                      <div className="text-xs uppercase tracking-tight font-extrabold">Shopee Oficial</div>
                      <div className="text-[11px] text-orange-100 font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-yellow-300" />
                        Frete Grátis & Cupons
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Bento Showcase Tile & Social Proof Tile */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Visual Showcase Tile */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-orange-100 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-orange-100 text-[#FF7A00] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    Galeria Real
                  </span>
                  <span className="text-xs font-bold text-gray-500">
                    Kit Campeão 12 Unidades
                  </span>
                </div>

                {/* Main Image Frame */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-[#FFF8F0] group border border-orange-100">
                  <img
                    src={heroImages[activeImageIndex].url}
                    alt="Bolinha cravo pet anti-stress para cães"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#2D2D2D]/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-xl">
                    <p className="font-semibold truncate">{heroImages[activeImageIndex].caption}</p>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-2 mt-2.5">
                  {heroImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative rounded-xl overflow-hidden aspect-4/3 border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx ? 'border-[#FF7A00] ring-2 ring-orange-400/30' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={`Miniatura ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Bento Price Banner */}
              <div className="mt-4 p-3.5 bg-[#FFF8F0] rounded-2xl border border-orange-200 flex items-center justify-between">
                <div>
                  <span className="block text-[11px] text-gray-500 font-bold uppercase tracking-wider">Preço no Kit:</span>
                  <span className="text-xl font-black text-[#2D2D2D] font-['Outfit',sans-serif]">
                    R$ 4,15 <span className="text-xs text-gray-500 font-normal">/ bolinha</span>
                  </span>
                </div>
                <a
                  href="#ofertas"
                  className="inline-flex items-center gap-1.5 bg-[#FF7A00] hover:bg-orange-600 text-white font-black px-4 py-2 rounded-xl text-xs uppercase tracking-tight shadow-sm transition-all hover:scale-105"
                >
                  <span>Ver Kits</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Live Social Proof Bento Tile */}
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-orange-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-base shrink-0">
                ✓
              </div>
              <div className="text-xs">
                <p className="text-[#2D2D2D] font-bold">
                  <strong>{recentBuyers[notificationIndex].name}</strong> ({recentBuyers[notificationIndex].city})
                </p>
                <p className="text-gray-500">
                  Comprou o <span className="text-[#FF7A00] font-bold">{recentBuyers[notificationIndex].item}</span> via <span className="font-bold text-[#2D2D2D]">{recentBuyers[notificationIndex].platform}</span> • <span className="text-gray-400">{recentBuyers[notificationIndex].time}</span>
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
