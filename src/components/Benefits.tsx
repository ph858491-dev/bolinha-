import React from 'react';
import { ShieldAlert, Sparkles, Activity, HeartHandshake, Flame, Eye, CheckCircle, ArrowRight } from 'lucide-react';
import { BENEFITS, LINKS } from '../data/productData';

export const Benefits: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldAlert: <ShieldAlert className="w-6 h-6 text-orange-600" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-500" />,
    Activity: <Activity className="w-6 h-6 text-emerald-600" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-blue-600" />,
    Flame: <Flame className="w-6 h-6 text-rose-500" />,
    Gift: <Eye className="w-6 h-6 text-purple-600" />
  };

  return (
    <section id="beneficios" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-[#FF7A00] text-xs font-black uppercase px-3.5 py-1 rounded-full tracking-wider">
            Desenvolvida Por Especialistas em Comportamento Canino
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D2D2D] tracking-tight uppercase font-['Outfit',sans-serif]">
            Muito Mais Que Uma Bolinha: Uma Solução Completa Para o Seu Pet
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            Você sabia que 7 a cada 10 cães sofrem com ansiedade por falta de estímulo correto? A mastigação na textura cravo ativa neurotransmissores de calma e relaxamento.
          </p>
        </div>

        {/* Benefits Grid in Bento Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 border border-orange-100 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF8F0] border border-orange-100 group-hover:bg-orange-100 flex items-center justify-center transition-colors">
                  {iconMap[benefit.iconName] || <Sparkles className="w-6 h-6 text-[#FF7A00]" />}
                </div>

                <h3 className="text-lg font-black text-[#2D2D2D] uppercase font-['Outfit',sans-serif] group-hover:text-[#FF7A00] transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {benefit.metric && (
                <div className="mt-5 pt-3.5 border-t border-orange-100 flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{benefit.metric}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bento Charcoal Highlight Banner */}
        <div className="mt-8 bg-[#2D2D2D] text-white rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-block bg-[#FF7A00] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                Saúde Bucal em Primeiro Lugar
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-['Outfit',sans-serif] text-yellow-300 uppercase tracking-tight">
                Como os Cravos Emborrachados Limpam os Dentes?
              </h3>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                Ao morder a bolinha, os cravos maleáveis penetram entre os dentes e alcançam a linha da gengiva, removendo resíduos de ração e impedindo a formação de placas de tártaro e gengivite, dispensando o estresse da escovação forçada.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-bold text-stone-300 pt-2">
                <span className="flex items-center gap-1 text-emerald-400">
                  ✓ Recomendado por Adestradores
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  ✓ Borracha Atóxica e Lavável
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  ✓ Pula Alto em Qualquer Piso
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-3 bg-white/5 p-6 rounded-2xl border border-white/10">
              <span className="text-xs text-stone-300 uppercase font-black tracking-wider">Garanta seu kit com desconto</span>
              <span className="text-2xl sm:text-3xl font-black text-yellow-400 font-['Outfit',sans-serif]">A partir de R$ 27,90</span>
              <a
                href="#ofertas"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FF7A00] hover:bg-orange-600 text-white font-black py-3 px-5 rounded-xl uppercase tracking-tight shadow-md transition-all hover:scale-105"
              >
                <span>Ver Ofertas Disponíveis</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
