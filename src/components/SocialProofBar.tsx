import React from 'react';
import { Award, Smile, ShieldCheck, HeartHandshake } from 'lucide-react';

export const SocialProofBar: React.FC = () => {
  const stats = [
    {
      icon: Smile,
      value: '+15.400',
      label: 'Cães Mais Felizes',
      sub: 'Em todo o Brasil'
    },
    {
      icon: Award,
      value: '4.9 / 5.0',
      label: 'Avaliação Média',
      sub: '+3.200 avaliações 5 estrelas'
    },
    {
      icon: ShieldCheck,
      value: '100% Atóxico',
      label: 'Borracha Premium Sem BPA',
      sub: 'Seguro para mastigação'
    },
    {
      icon: HeartHandshake,
      value: '99.4%',
      label: 'Taxa de Satisfação',
      sub: 'Garantia de 7 dias'
    }
  ];

  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2D2D2D] rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center space-y-1">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 text-[#FF7A00] flex items-center justify-center mb-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-white font-['Outfit',sans-serif]">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-black text-[#FF7A00] uppercase tracking-wide">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-stone-400 font-normal">
                    {stat.sub}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

