export interface ProductKit {
  id: string;
  name: string;
  tag?: string;
  units: number;
  originalPrice: number;
  promoPrice: number;
  installments: string;
  popular?: boolean;
  savings: number;
  colors: string[];
  mercadoLivreUrl: string;
  shopeeUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  dogName: string;
  dogBreed: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  dogImage: string;
  ownerImage: string;
  highlightBenefit: string;
}

export interface Benefit {
  iconName: string;
  title: string;
  description: string;
  metric?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'produto' | 'entrega' | 'garantia';
}

export interface SocialLink {
  name: string;
  platform: 'facebook' | 'instagram' | 'reddit' | 'x' | 'whatsapp';
  url: string;
  handle: string;
  followersCount?: string;
  ctaText: string;
  description: string;
  colorClass: string;
}
