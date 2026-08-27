import { ProductKit, Testimonial, Benefit, FaqItem, SocialLink } from '../types';

export const LINKS = {
  mercadoLivre: 'https://www.mercadolivre.com.br/kit-12-bolinhas-cravo-pet-antistress-caes-coloridas/up/MLBU3235550644?pdp_filters=item_id%3AMLB4092657737',
  mercadoLivreFull: 'https://www.mercadolivre.com.br/kit-12-bolinhas-cravo-pet-antistress-caes-coloridas/up/MLBU3235550644?pdp_filters=item_id%3AMLB4092657737',
  shopee: 'https://shopee.com.br/product/454152851/13597635583',
  facebook: 'https://www.facebook.com/petshoppetshow/videos/-divers%C3%A3o-garantida-para-o-seu-pet-no-pet-showaqui-voc%C3%AA-encontra-brinquedos-para/1312535837001595/',
  instagram: 'https://www.instagram.com/lojasmundopet_/',
  reddit: 'https://www.google.com/search?q=oja+com+venda+de+blinha+na+reddit&oq=oja+com+venda+de+blinha+na+reddit&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTI0MDk0ajBqNKgCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8',
  x: 'https://x.com',
  whatsappNumber: '11965724330',
  whatsappUrl: 'https://wa.me/5511965724330?text=Ol%C3%A1%21+Vim+pela+Landing+Page+e+gostaria+de+saber+mais+sobre+a+Bolinha+Cravo+Pet+Anti-stress+para+c%C3%A3es%21',
  googleMaps: 'https://www.google.com/maps/dir//\'\'/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x94ce5a1a4403384d:0xa467e5b373a4c697!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF'
};

export const PRODUCT_KITS: ProductKit[] = [
  {
    id: 'kit-3',
    name: 'Kit Inicial (3 Bolinhas)',
    tag: 'Ideal para experimentar',
    units: 3,
    originalPrice: 39.90,
    promoPrice: 27.90,
    installments: '3x de R$ 9,30 sem juros',
    savings: 30,
    colors: ['Azul', 'Vermelho', 'Amarelo'],
    mercadoLivreUrl: LINKS.mercadoLivre,
    shopeeUrl: LINKS.shopee,
    description: 'Perfeito para apartamentos e pets de pequeno/médio porte testarem a textura cravo.'
  },
  {
    id: 'kit-12',
    name: 'Kit Campeão (12 Bolinhas Coloridas)',
    tag: 'MAIS VENDIDO & MELHOR CUSTO-BENEFÍCIO',
    units: 12,
    originalPrice: 89.90,
    promoPrice: 49.90,
    installments: '6x de R$ 8,31 sem juros',
    popular: true,
    savings: 45,
    colors: ['Sortidas (Azul, Verde, Rosa, Amarelo, Laranja, Roxo)'],
    mercadoLivreUrl: LINKS.mercadoLivre,
    shopeeUrl: LINKS.shopee,
    description: 'O kit oficial anunciado no Mercado Livre e Shopee! Estoque completo para seu cão nunca mais ficar sem brincar.'
  },
  {
    id: 'kit-6',
    name: 'Kit Família (6 Bolinhas)',
    tag: 'Ótima Economia',
    units: 6,
    originalPrice: 59.90,
    promoPrice: 37.90,
    installments: '4x de R$ 9,47 sem juros',
    savings: 37,
    colors: ['Sortidas Vibrantes'],
    mercadoLivreUrl: LINKS.mercadoLivre,
    shopeeUrl: LINKS.shopee,
    description: 'Excelente para quem tem mais de um pet ou gosta de espalhar brinquedos pela casa.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Mariana Silveira',
    dogName: 'Thor',
    dogBreed: 'Golden Retriever (2 anos)',
    location: 'São Paulo - SP',
    rating: 5,
    date: 'Há 3 dias',
    title: 'Salvou meus sapatos e móveis!',
    comment: 'O Thor destruía tudo quando ficava sozinho. Comprei o Kit com 12 no Mercado Livre e foi a melhor decisão. Ele fica horas mastigando, a borracha é muito resistente e não solta pedaços. Super recomendo!',
    verifiedPurchase: true,
    dogImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
    ownerImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    highlightBenefit: 'Ansiedade Zero & Móveis Salvos'
  },
  {
    id: '2',
    author: 'Carlos Eduardo Mendes',
    dogName: 'Pipoca & Max',
    dogBreed: 'Spitz Alemão e Shih-tzu',
    location: 'Campinas - SP',
    rating: 5,
    date: 'Há 5 dias',
    title: 'Dentes limpinhos e gengiva saudável!',
    comment: 'A veterinária elogiou o tártaro reduzido após 3 semanas usando a bolinha cravo. Além disso, o frete pela Shopee chegou em apenas 2 dias aqui em SP. Produto de qualidade ímpar!',
    verifiedPurchase: true,
    dogImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
    ownerImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    highlightBenefit: 'Higiene Bucal Comprovada'
  },
  {
    id: '3',
    author: 'Juliana Paes Costa',
    dogName: 'Luna',
    dogBreed: 'Bulldog Francês (3 anos)',
    location: 'Santo André - SP',
    rating: 5,
    date: 'Há 1 semana',
    title: 'Pula muito bem e não machuca a boca!',
    comment: 'Borracha macia na medida certa, os cravos fazem uma massagem que ela ama. Ela dorme abraçada com a bolinha azul. Já indiquei para todo o grupo do condomínio!',
    verifiedPurchase: true,
    dogImage: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    ownerImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    highlightBenefit: 'Material Atóxico & Macio'
  },
  {
    id: '4',
    author: 'Rodrigo Fontes',
    dogName: 'Zeus',
    dogBreed: 'Pitbull (1 ano e meio)',
    location: 'Guarulhos - SP',
    rating: 5,
    date: 'Há 2 semanas',
    title: 'Resistência de verdade para mordidas fortes',
    comment: 'Comprei com receio porque Pitbull destrói qualquer brinquedo em minutos. Essas bolinhas cravo aguentaram firme! A flexibilidade absorve a força da mandíbula.',
    verifiedPurchase: true,
    dogImage: 'https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=600&q=80',
    ownerImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    highlightBenefit: 'Ultra Resistente'
  }
];

export const BENEFITS: Benefit[] = [
  {
    iconName: 'ShieldAlert',
    title: 'Combate ao Estresse & Ansiedade',
    description: 'A mastigação contínua libera endorfina e dopamina, acalmando o cão hiperativo e prevenindo a destruição de móveis.',
    metric: '92% menos ansiedade de separação'
  },
  {
    iconName: 'Sparkles',
    title: 'Ação Dental Anti-Tártaro',
    description: 'Os cravos emborrachados funcionam como uma escovação natural, limpando as placas bacterianas e massageando as gengivas.',
    metric: 'Reduz até 80% do mau hálito pet'
  },
  {
    iconName: 'Activity',
    title: 'Gasto de Energia & Pulo Imprevisível',
    description: 'Por causa dos relevos, a bolinha quica em direções dinâmicas, aguçando os reflexos e o instinto natural de caça.',
    metric: 'Mais de 1 hora de exercício ativo'
  },
  {
    iconName: 'HeartHandshake',
    title: '100% Borracha Atóxica e Segura',
    description: 'Livre de BPA, ftalatos e metais pesados. Pigmentos de grau alimentício que não desbotam e não soltam resíduos tóxicos.',
    metric: '100% Pet-Safe Certificado'
  },
  {
    iconName: 'Flame',
    title: 'Flutua na Água & Fácil de Lavar',
    description: 'Ideal para brincar na piscina, parque, praia ou quintal. Basta enxaguar com água corrente e sabão neutro para higienizar.',
    metric: 'Higienização em 30 segundos'
  },
  {
    iconName: 'Gift',
    title: 'Cores Vibrantes de Alto Contraste',
    description: 'Cores selecionadas especificamente para a visão canina (tons de azul, amarelo e contrastes) fáceis de achar na grama.',
    metric: 'Visibilidade máxima para o pet'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram Oficial',
    platform: 'instagram',
    url: LINKS.instagram,
    handle: '@lojasmundopet_',
    followersCount: '45k+ seguidores',
    ctaText: 'Seguir no Instagram',
    description: 'Dicas diárias de adestramento, vídeos de clientes e cupons exclusivos.',
    colorClass: 'from-pink-500 via-purple-500 to-amber-500'
  },
  {
    name: 'Facebook / Pet Show',
    platform: 'facebook',
    url: LINKS.facebook,
    handle: 'Pet Shop Pet Show',
    followersCount: 'Vídeos com +100k views',
    ctaText: 'Assistir no Facebook',
    description: 'Confira o vídeo de demonstração dos pets brincando com a bolinha!',
    colorClass: 'from-blue-600 to-blue-800'
  },
  {
    name: 'Comunidade Reddit',
    platform: 'reddit',
    url: LINKS.reddit,
    handle: 'Comunidades Pet Brasil',
    followersCount: 'Discussões & Reviews',
    ctaText: 'Ver no Reddit',
    description: 'Tópicos reais de tutores tirando dúvidas sobre brinquedos resistentes.',
    colorClass: 'from-orange-500 to-red-600'
  },
  {
    name: 'X (Twitter)',
    platform: 'x',
    url: LINKS.x,
    handle: '@bolinhapetbr',
    followersCount: 'Novidades & Trends',
    ctaText: 'Seguir no X',
    description: 'Tendências e memes caninos para alegrar o seu dia.',
    colorClass: 'from-stone-900 to-stone-700'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'A bolinha cravo é indicada para cães de qual porte?',
    answer: 'É perfeita para cães de todos os portes (pequeno, médio e grande)! O diâmetro de aproximadamente 5.5cm a 6.5cm permite fácil apreensão na boca tanto para um Shih-tzu ou Poodle quanto para Golden, Labrador ou Pastor.',
    category: 'produto'
  },
  {
    question: 'A borracha é segura e atóxica caso ele mastigue muito?',
    answer: 'Sim, totalmente! O material é composto de borracha termoplástica flexível atóxica (livre de BPA e toxinas). Foi desenhada especificamente para mastigação pet sem soltar resíduos.',
    category: 'produto'
  },
  {
    question: 'Onde é mais rápido para comprar: Mercado Livre ou Shopee?',
    answer: 'Ambas as plataformas contam com entrega rápida para todo o Brasil. No Mercado Livre você conta com a opção Envio Full (muitas regiões recebem no dia seguinte) e na Shopee você pode aplicar cupons de frete grátis da plataforma.',
    category: 'entrega'
  },
  {
    question: 'Possui garantia caso meu cão não se adapte?',
    answer: 'Sim! Garantimos 7 dias incondicionais de satisfação pelo Código de Defesa do Consumidor, além de toda a proteção do comprador garantida pelo Mercado Livre e Shopee.',
    category: 'garantia'
  },
  {
    question: 'Como faço para retirar na loja física ou tirar dúvidas via WhatsApp?',
    answer: 'Você pode clicar no nosso botão de Localização no Google Maps para ver a rota exata da loja física, ou clicar no botão flutuante do WhatsApp (11 96572-4330) para falar diretamente com nossos consultores.',
    category: 'entrega'
  }
];
