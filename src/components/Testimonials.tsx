import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, ThumbsUp, Heart, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS, LINKS } from '../data/productData';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'resistencia' | 'dentes' | 'ansiedade'>('all');

  const filteredReviews = TESTIMONIALS.filter((t) => {
    if (filter === 'resistencia') return t.highlightBenefit.includes('Resistente') || t.title.includes('Resistência');
    if (filter === 'dentes') return t.highlightBenefit.includes('Higiene') || t.title.includes('Dentes');
    if (filter === 'ansiedade') return t.highlightBenefit.includes('Ansiedade') || t.title.includes('Móveis');
    return true;
  });

  return (
    <section id="depoimentos" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header with Ratings Summary in Bento Card */}
        <div className="bg-[#2D2D2D] text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-sm border border-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#FF7A00] text-white text-xs font-black uppercase px-3.5 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Depoimentos Reais de Qualidade
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase font-['Outfit',sans-serif] text-white">
                O Que Dizem os Tutores Apaixonados
              </h2>
              <p className="text-stone-300 text-sm font-normal max-w-xl">
                Mais de 15.000 clientes satisfeitos no Mercado Livre e Shopee. Veja relatos reais sobre resistência, alívio de estresse e limpeza bucal.
              </p>
            </div>

            {/* Rating Summary Card inside Bento */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-4xl font-black text-yellow-400 font-['Outfit',sans-serif]">4.9</span>
                  <div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-stone-400">de 5.0 estrelas</span>
                  </div>
                </div>
                <p className="text-xs text-stone-300 font-bold mt-1">
                  +3.200 avaliações verificadas
                </p>
              </div>

              <div className="text-xs text-stone-400 border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-4 space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>99% recomendam</span>
                </div>
                <div>⚡ Envio Full & Shopee Express</div>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-xs font-black uppercase">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#FF7A00] text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-orange-50 border border-orange-100'
            }`}
          >
            Todos os Relatos
          </button>
          <button
            onClick={() => setFilter('resistencia')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              filter === 'resistencia'
                ? 'bg-[#FF7A00] text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-orange-50 border border-orange-100'
            }`}
          >
            💪 Resistência
          </button>
          <button
            onClick={() => setFilter('dentes')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              filter === 'dentes'
                ? 'bg-[#FF7A00] text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-orange-50 border border-orange-100'
            }`}
          >
            🦷 Limpeza Dental & Tártaro
          </button>
          <button
            onClick={() => setFilter('ansiedade')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              filter === 'ansiedade'
                ? 'bg-[#FF7A00] text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-orange-50 border border-orange-100'
            }`}
          >
            😌 Alívio do Estresse
          </button>
        </div>

        {/* Testimonials Grid (Bento Tiles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredReviews.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-orange-100 hover:border-orange-300 rounded-3xl p-6 space-y-4 shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header with Author & Dog Info */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.dogImage}
                      alt={testimonial.dogName}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-2xl object-cover border border-orange-200"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-black text-sm text-[#2D2D2D] uppercase font-['Outfit',sans-serif]">{testimonial.author}</span>
                        {testimonial.verifiedPurchase && (
                          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-0.5">
                            <CheckCircle2 className="w-2.5 h-2.5" />
                            Verificado
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 font-medium">
                        Tutor(a) de <strong className="text-[#FF7A00]">{testimonial.dogName}</strong> ({testimonial.dogBreed})
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="flex text-amber-400 justify-end">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold">{testimonial.date}</span>
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="inline-block bg-orange-100 text-[#FF7A00] text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  ✨ {testimonial.highlightBenefit}
                </div>

                {/* Title and Comment */}
                <div>
                  <h4 className="font-black text-sm text-[#2D2D2D] mb-1 uppercase font-['Outfit',sans-serif]">
                    "{testimonial.title}"
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {testimonial.comment}
                  </p>
                </div>
              </div>

              {/* Footer Location & Satisfaction */}
              <div className="pt-3 border-t border-orange-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                <span>📍 {testimonial.location}</span>
                <span className="flex items-center gap-1 text-emerald-700 font-bold">
                  <ThumbsUp className="w-3 h-3" /> Recomenda o produto
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt Bento Card */}
        <div className="mt-8 text-center bg-white border border-orange-100 rounded-3xl p-6 max-w-2xl mx-auto space-y-3 shadow-sm">
          <p className="text-sm font-black text-[#2D2D2D] uppercase font-['Outfit',sans-serif]">
            Junte-se a milhares de tutores satisfeitos!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={LINKS.mercadoLivre}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFE600] hover:bg-[#edd400] text-[#2D2D2D] text-xs font-black uppercase px-4 py-2.5 rounded-xl transition-all shadow-sm"
            >
              Comprar no Mercado Livre
            </a>
            <a
              href={LINKS.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EE4D2D] hover:bg-[#d83c1d] text-white text-xs font-black uppercase px-4 py-2.5 rounded-xl transition-all shadow-sm"
            >
              Comprar na Shopee
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
