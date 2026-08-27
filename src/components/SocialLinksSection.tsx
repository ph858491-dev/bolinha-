import React from 'react';
import { ExternalLink, Play, MessageSquare, Share2, Sparkles, Heart } from 'lucide-react';
import { SOCIAL_LINKS, LINKS } from '../data/productData';

export const SocialLinksSection: React.FC = () => {
  return (
    <section id="redes-sociais" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-[#FF7A00] text-xs font-black uppercase px-3.5 py-1 rounded-full tracking-wider">
            <Share2 className="w-3.5 h-3.5" />
            Comunidade & Redes Sociais
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] uppercase font-['Outfit',sans-serif]">
            Conecte-se Conosco Nas Redes Sociais
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            Acompanhe vídeos exclusivos de cães se divertindo com as bolinhas, participe de novidades e confira as avaliações da nossa comunidade.
          </p>
        </div>

        {/* Social Cards Grid in Bento Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Instagram */}
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl p-6 border border-orange-100 shadow-sm hover:shadow-md hover:border-pink-200 transition-all flex flex-col justify-between hover:scale-[1.02]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center text-xl shadow-xs">
                📸
              </div>
              <div>
                <span className="text-[10px] font-black text-pink-600 uppercase tracking-wider block">
                  Instagram Oficial
                </span>
                <h3 className="text-lg font-black text-[#2D2D2D] font-['Outfit',sans-serif] uppercase">
                  @lojasmundopet_
                </h3>
                <p className="text-xs text-gray-500 mt-1 font-normal">
                  Fotos de clientes, stories diários e dicas de enriquecimento ambiental para cães.
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-orange-100 flex items-center justify-between text-xs font-bold text-pink-600 group-hover:text-pink-700">
              <span>Seguir no Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          {/* Facebook */}
          <a
            href={LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl p-6 border border-orange-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between hover:scale-[1.02]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center text-xl shadow-xs">
                <Play className="w-6 h-6 fill-white" />
              </div>
              <div>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider block">
                  Vídeo no Facebook
                </span>
                <h3 className="text-lg font-black text-[#2D2D2D] font-['Outfit',sans-serif] uppercase">
                  Pet Show Video
                </h3>
                <p className="text-xs text-gray-500 mt-1 font-normal">
                  Assista ao vídeo demonstrativo dos brinquedos e veja os pets pulando e brincando!
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-orange-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
              <span>Assistir ao Vídeo</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          {/* Reddit */}
          <a
            href={LINKS.reddit}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl p-6 border border-orange-100 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between hover:scale-[1.02]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF4500] text-white flex items-center justify-center text-xl shadow-xs">
                🤖
              </div>
              <div>
                <span className="text-[10px] font-black text-orange-600 uppercase tracking-wider block">
                  Comunidade Reddit
                </span>
                <h3 className="text-lg font-black text-[#2D2D2D] font-['Outfit',sans-serif] uppercase">
                  Reviews & Tópicos
                </h3>
                <p className="text-xs text-gray-500 mt-1 font-normal">
                  Veja discussões reais de tutores sobre a durabilidade da bolinha cravo para cães.
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-orange-100 flex items-center justify-between text-xs font-bold text-orange-600 group-hover:text-orange-700">
              <span>Ver Tópicos</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          {/* X (Twitter) */}
          <a
            href={LINKS.x}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl p-6 border border-orange-100 shadow-sm hover:shadow-md hover:border-gray-400 transition-all flex flex-col justify-between hover:scale-[1.02]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2D2D2D] text-white flex items-center justify-center text-lg font-black shadow-xs">
                𝕏
              </div>
              <div>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-wider block">
                  Twitter / X
                </span>
                <h3 className="text-lg font-black text-[#2D2D2D] font-['Outfit',sans-serif] uppercase">
                  @bolinhapetbr
                </h3>
                <p className="text-xs text-gray-500 mt-1 font-normal">
                  Novidades rápidas, memes e promoções para a comunidade pet.
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-orange-100 flex items-center justify-between text-xs font-bold text-[#2D2D2D] group-hover:text-black">
              <span>Acompanhar no X</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};
