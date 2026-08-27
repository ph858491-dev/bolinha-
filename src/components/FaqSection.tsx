import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, LINKS } from '../data/productData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-[#FF7A00] text-xs font-black uppercase px-3.5 py-1 rounded-full tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] uppercase font-['Outfit',sans-serif]">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            Tudo o que você precisa saber antes de fazer o pedido do seu kit no Mercado Livre ou Shopee.
          </p>
        </div>

        {/* Accordion Bento Cards */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border border-[#FF7A00] bg-white shadow-sm' : 'border border-orange-100 bg-white hover:border-orange-200'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-black text-[#2D2D2D] uppercase text-sm sm:text-base cursor-pointer"
                >
                  <span className="font-['Outfit',sans-serif]">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#FF7A00] text-white' : 'bg-orange-50 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 font-normal leading-relaxed border-t border-orange-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions Bento Banner */}
        <div className="mt-8 bg-white border border-emerald-200 rounded-3xl p-6 text-center space-y-3 shadow-sm">
          <h3 className="font-black text-[#2D2D2D] uppercase text-base font-['Outfit',sans-serif]">
            Ainda ficou com alguma dúvida sobre tamanho ou entrega?
          </h3>
          <p className="text-xs text-gray-600 max-w-md mx-auto font-normal">
            Nossa equipe de suporte está disponível no WhatsApp para te orientar em tempo real.
          </p>
          <div>
            <a
              href={LINKS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase px-5 py-3 rounded-xl shadow-sm transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp: (11) 96572-4330</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
