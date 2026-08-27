import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { LINKS } from '../data/productData';

export const ComparisonSection: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Resistência à Mastigação',
      common: 'Rasga em poucos minutos e solta fiapos perigosos',
      ourBall: 'Borracha termoplástica flexível de alta densidade',
      ourWinner: true
    },
    {
      feature: 'Segurança & Toxicidade',
      common: 'Plástico rígido e tintas industriais com BPA',
      ourBall: '100% Atóxico, sem BPA e seguro para ingestão acidental de saliva',
      ourWinner: true
    },
    {
      feature: 'Saúde Bucal & Gengivas',
      common: 'Feltro abrasivo que desgasta o esmalte dentário',
      ourBall: 'Cravos massageadores que limpam tártaro sem agredir os dentes',
      ourWinner: true
    },
    {
      feature: 'Estímulo Mental & Anti-stress',
      common: 'Pulo previsível, cão perde o interesse rápido',
      ourBall: 'Pulo dinâmico e imprevisível que ativa o instinto de caça',
      ourWinner: true
    },
    {
      feature: 'Higienização e Odor',
      common: 'Acumula baba, bactérias e mau cheiro com facilidade',
      ourBall: 'Lava em 30 segundos em água corrente e não acumula fungos',
      ourWinner: true
    }
  ];

  return (
    <section id="comparativo" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-[#FF7A00] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
            Comparativo de Qualidade
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D2D2D] uppercase font-['Outfit',sans-serif]">
            Bolinha Comum vs. <span className="text-[#FF7A00]">Bolinha Cravo Pet</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-normal">
            Veja por que brinquedos frágeis de feltro ou plástico rígido podem ser perigosos e por que a Bolinha Cravo é a escolha número 1 dos tutores.
          </p>
        </div>

        {/* Comparison Bento Card */}
        <div className="bg-white rounded-3xl p-5 sm:p-8 border border-orange-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-4 border-b border-orange-100 text-xs sm:text-sm font-black uppercase tracking-wider">
            <div className="hidden md:block md:col-span-4 text-gray-500">Características</div>
            <div className="md:col-span-4 text-rose-600 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              Bolinhas de Tênis / Plástico Comum
            </div>
            <div className="md:col-span-4 text-[#FF7A00] flex items-center gap-1.5 font-black">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Bolinha Cravo Pet Show
            </div>
          </div>

          <div className="divide-y divide-orange-100">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="py-4 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
                <div className="md:col-span-4 font-black text-[#2D2D2D] text-sm uppercase font-['Outfit',sans-serif]">
                  {row.feature}
                </div>
                
                {/* Common ball cell */}
                <div className="md:col-span-4 bg-rose-50 p-3 rounded-2xl md:bg-transparent md:p-0 flex items-start gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.common}</span>
                </div>

                {/* Our ball cell */}
                <div className="md:col-span-4 bg-emerald-50 p-3 rounded-2xl md:bg-emerald-50/70 md:p-3 border border-emerald-200/60 flex items-start gap-2 text-xs sm:text-sm font-bold text-emerald-950">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.ourBall}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-8 text-center">
          <a
            href="#ofertas"
            className="inline-flex items-center gap-2 bg-[#2D2D2D] hover:bg-black text-white font-black px-6 py-3.5 rounded-2xl uppercase tracking-tight shadow-sm transition-all hover:scale-105 text-sm"
          >
            <span>Quero Escolher Meu Kit Promocional</span>
            <span className="text-yellow-400">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
