import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { LINKS } from '../data/productData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);

  useEffect(() => {
    // Show polite notification popup after 4 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasPrompted(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-3xl shadow-lg border border-orange-100 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-[#2D2D2D] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-xl">
                  🐶
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#2D2D2D] rounded-full"></span>
              </div>
              <div>
                <h4 className="font-black text-sm leading-tight uppercase font-['Outfit',sans-serif]">Atendimento Pet Show</h4>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online • (11) 96572-4330
                </span>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white p-1 rounded-lg cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#FFF8F0] space-y-2.5">
            <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs text-xs text-gray-700 border border-orange-100 leading-relaxed font-normal">
              Olá! 👋 Quer ajuda para escolher o melhor <strong>Kit de Bolinhas Cravo</strong> para o porte do seu cão?
            </div>
            <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs text-xs text-gray-700 border border-orange-100 leading-relaxed font-normal">
              Tire dúvidas sobre <strong>frete rápido no Mercado Livre e Shopee</strong> ou retirada na loja física!
            </div>
          </div>

          {/* Action */}
          <div className="p-3 bg-white border-t border-orange-100">
            <a
              href={LINKS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase py-3 px-4 rounded-xl shadow-sm transition-all hover:scale-102"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Iniciar Conversa no WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
        aria-label="Abrir WhatsApp"
      >
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
        </span>

        <MessageCircle className="w-6 h-6 text-white" />
        <span className="hidden sm:inline font-black text-xs uppercase tracking-wider pr-1">
          WhatsApp 11 96572-4330
        </span>
      </button>

    </div>
  );
};
