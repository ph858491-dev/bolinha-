import React from 'react';
import { MapPin, Navigation, Clock, Phone, MessageCircle, Store, CheckCircle, ExternalLink } from 'lucide-react';
import { LINKS } from '../data/productData';

export const PhysicalStore: React.FC = () => {
  return (
    <section id="loja-fisica" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-black uppercase px-3.5 py-1 rounded-full tracking-wider">
            <Store className="w-3.5 h-3.5" />
            Visite Nossa Loja Física ou Retire Seu Pedido
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] uppercase font-['Outfit',sans-serif]">
            Venha Nos Conhecer & Traga Seu Pet! 🐶
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            Prefere ver o produto de perto ou retirar no mesmo dia? Estamos de portas abertas em um espaço 100% Pet Friendly.
          </p>
        </div>

        {/* Location Showcase Bento Card */}
        <div className="bg-[#2D2D2D] text-white rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Store Information */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-black tracking-wider uppercase text-white bg-[#FF7A00] px-3 py-1 rounded-full">
                  Pet Show • Loja & Retirada
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-['Outfit',sans-serif] text-white uppercase">
                  Pet Shop Pet Show & Mundo Pet
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed font-normal">
                  Espaço completo para você escolher as cores favoritas do seu cão, testar a flexibilidade dos brinquedos e retirar seu kit na hora.
                </p>
              </div>

              {/* Detail Items */}
              <div className="space-y-3 text-xs sm:text-sm text-stone-200">
                
                <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                  <MapPin className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Localização:</strong>
                    <span className="text-stone-300">São Paulo - SP (Clique no botão abaixo para rota direta no Google Maps)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Horário de Funcionamento:</strong>
                    <span className="text-stone-300">Segunda a Sexta: 08:30 às 19:00 • Sábado: 09:00 às 17:00</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                  <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Atendimento & WhatsApp:</strong>
                    <a
                      href={LINKS.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-bold hover:underline"
                    >
                      (11) 96572-4330
                    </a>
                  </div>
                </div>

              </div>

              {/* Perks Checklist */}
              <div className="flex flex-wrap gap-2 text-xs font-bold text-stone-300">
                <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  100% Pet Friendly
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Estacionamento
                </span>
                <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Retirada Imediata
                </span>
              </div>

              {/* Main Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={LINKS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF7A00] hover:bg-orange-600 text-white font-black px-6 py-3.5 rounded-2xl uppercase tracking-tight shadow-md transition-all text-xs sm:text-sm hover:scale-105"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Traçar Rota no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={LINKS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-black px-5 py-3.5 rounded-2xl uppercase tracking-tight shadow-md transition-all text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirmar no WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Visual Map Representation */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-4 border border-white/10 shadow-lg space-y-3">
                
                {/* Visual Map Container */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-100 group">
                  <img
                    src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
                    alt="Espaço da Loja Física Pet Show"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Pin Overlay Card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-lg animate-bounce">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-black text-sm font-['Outfit',sans-serif] uppercase">Ponto de Retirada & Loja Física</span>
                    </div>
                    <p className="text-xs text-stone-200">
                      Abra o Google Maps para instruções de trânsito em tempo real.
                    </p>
                  </div>
                </div>

                {/* Direct Google Maps Link Card */}
                <a
                  href={LINKS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#FFF8F0] hover:bg-orange-100 border border-orange-200 p-3.5 rounded-2xl text-center transition-all group"
                >
                  <span className="text-xs font-black text-[#2D2D2D] uppercase group-hover:text-[#FF7A00] flex items-center justify-center gap-1.5">
                    <MapPin className="w-4 h-4 text-red-500" />
                    Abrir no Google Maps (Carro, Ônibus ou a Pé)
                  </span>
                </a>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
