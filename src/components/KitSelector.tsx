import React, { useState } from 'react';
import { ShoppingCart, Check, Star, Sparkles, Shield, Truck, Zap, Flame, ExternalLink } from 'lucide-react';
import { PRODUCT_KITS, LINKS } from '../data/productData';

export const KitSelector: React.FC = () => {
  const [selectedKitId, setSelectedKitId] = useState<string>('kit-12');

  return (
    <section id="ofertas" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#FF7A00] text-white text-xs font-black uppercase px-4 py-1 rounded-full tracking-wider shadow-sm">
            <Flame className="w-3.5 h-3.5 fill-white" />
            Ofertas com Preço de Atacado
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D2D2D] uppercase tracking-tight font-['Outfit',sans-serif]">
            Escolha o Kit Ideal Para o Seu Cão
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            Quanto mais unidades, maior a economia! Compre com envio rápido e compra protegida no Mercado Livre ou Shopee.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PRODUCT_KITS.map((kit) => {
            const isPopular = kit.popular;
            const pricePerUnit = (kit.promoPrice / kit.units).toFixed(2);

            return (
              <div
                key={kit.id}
                onClick={() => setSelectedKitId(kit.id)}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isPopular
                    ? 'bg-white border-2 border-[#FF7A00] shadow-md lg:-translate-y-1'
                    : 'bg-white border border-orange-100 shadow-sm hover:shadow-md hover:border-orange-200'
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF7A00] text-white text-[11px] font-black px-4 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    Mais Vendido • Melhor Custo-Benefício
                  </div>
                )}

                <div className="p-6 sm:p-7 space-y-5">
                  
                  {/* Title & Tag */}
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#FF7A00] bg-orange-100 px-2.5 py-1 rounded-full">
                      {kit.tag || `${kit.units} Unidades`}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#2D2D2D] mt-2.5 uppercase font-['Outfit',sans-serif]">
                      {kit.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {kit.description}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="space-y-1 bg-[#FFF8F0] p-4 rounded-2xl border border-orange-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xs line-through text-gray-400 font-bold">
                        De R$ {kit.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="bg-emerald-100 text-emerald-800 text-[11px] font-black px-2 py-0.5 rounded-full">
                        {kit.savings}% OFF
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-bold text-gray-600">Por</span>
                      <span className="text-3xl sm:text-4xl font-black text-[#2D2D2D] font-['Outfit',sans-serif]">
                        R$ {kit.promoPrice.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-xs text-gray-500 font-normal">à vista</span>
                    </div>

                    <div className="text-xs font-bold text-emerald-700 pt-0.5">
                      {kit.installments}
                    </div>

                    <div className="text-[11px] text-gray-600 font-medium pt-1.5 border-t border-orange-200/60">
                      Apenas <strong className="text-[#FF7A00] font-black">R$ {pricePerUnit.replace('.', ',')} por bolinha</strong>
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li className="flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>{kit.units}x Bolinhas Cravo</strong> Pet Anti-stress</span>
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Cores sortidas de alto contraste visual</span>
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Material 100% borracha atóxica sem BPA</span>
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Garantia de 7 dias ou seu dinheiro de volta</span>
                    </li>
                  </ul>

                </div>

                {/* Purchase Buttons */}
                <div className="p-6 pt-0 space-y-2.5">
                  
                  {/* Mercado Livre Button */}
                  <a
                    href={kit.mercadoLivreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-xs uppercase bg-[#FFE600] hover:bg-[#edd400] text-[#2D2D2D] border border-yellow-400 shadow-sm transition-all hover:scale-[1.02]"
                  >
                    <span>🤝 Comprar no Mercado Livre</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>

                  {/* Shopee Button */}
                  <a
                    href={kit.shopeeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-xs uppercase bg-[#EE4D2D] hover:bg-[#d83c1d] text-white shadow-sm transition-all hover:scale-[1.02]"
                  >
                    <span>🛍️ Comprar na Shopee</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>

                  <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    🔒 Compra segura & pronta entrega
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Security Badges */}
        <div className="mt-8 bg-white rounded-3xl p-5 border border-orange-100 shadow-sm flex flex-wrap items-center justify-around gap-4 text-xs font-bold text-gray-700 text-center">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-600" />
            <span>Compra 100% Protegida pelas Plataformas Oficiais</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-blue-600" />
            <span>Entrega Rápida com Rastreamento em Tempo Real</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#FF7A00]" />
            <span>Despacho em até 24 Horas Úteis</span>
          </div>
        </div>

      </div>
    </section>
  );
};
