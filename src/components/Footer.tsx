import React from 'react';
import { ShieldCheck, Truck, Heart, MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { LINKS } from '../data/productData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D2D2D] text-stone-300 pt-12 pb-10 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-[#FF7A00] flex items-center justify-center text-white shadow-xs font-black">
                PS
              </div>
              <span className="font-black text-xl tracking-tight text-white uppercase font-['Outfit',sans-serif]">
                Pet Show <span className="text-[#FF7A00]">Bolinha</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm font-normal">
              Especialistas em brinquedos resistentes para enriquecimento ambiental, saúde dental e bem-estar canino. Compre com total segurança através dos nossos canais oficiais no Mercado Livre e Shopee.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-bold text-[#FF7A00]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantia de Satisfação de 7 Dias</span>
            </div>
          </div>

          {/* Col 3: Links de Compra */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-xs uppercase font-['Outfit',sans-serif] tracking-wider">
              Onde Comprar
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-medium">
              <li>
                <a
                  href={LINKS.mercadoLivre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 flex items-center gap-1 transition-colors"
                >
                  <span>Mercado Livre (Envio Full)</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={LINKS.shopee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 flex items-center gap-1 transition-colors"
                >
                  <span>Shopee (Cupons de Frete)</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#ofertas" className="hover:text-[#FF7A00] transition-colors">
                  Kit 12 Bolinhas (Mais Vendido)
                </a>
              </li>
              <li>
                <a href="#ofertas" className="hover:text-[#FF7A00] transition-colors">
                  Kit 6 e Kit 3 Bolinhas
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Redes & Comunidade */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-xs uppercase font-['Outfit',sans-serif] tracking-wider">
              Redes Sociais
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-medium">
              <li>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors flex items-center gap-1"
                >
                  <span>Instagram (@lojasmundopet_)</span>
                </a>
              </li>
              <li>
                <a
                  href={LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>Facebook (Pet Shop Pet Show)</span>
                </a>
              </li>
              <li>
                <a
                  href={LINKS.reddit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors flex items-center gap-1"
                >
                  <span>Comunidade Reddit</span>
                </a>
              </li>
              <li>
                <a
                  href={LINKS.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>X (Twitter) Oficial</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Atendimento & Localização */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-xs uppercase font-['Outfit',sans-serif] tracking-wider">
              Loja & Contato
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-medium">
              <li>
                <a
                  href={LINKS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1.5 font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: (11) 96572-4330</span>
                </a>
              </li>
              <li>
                <a
                  href={LINKS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Ver Rota no Google Maps</span>
                </a>
              </li>
              <li className="text-stone-500 pt-1">
                Atendimento: Seg à Sex das 08h30 às 19h
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} Pet Show Bolinha Cravo. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#beneficios" className="hover:text-white">Benefícios</a>
            <a href="#depoimentos" className="hover:text-white">Depoimentos</a>
            <a href="#loja-fisica" className="hover:text-white">Loja Física</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
