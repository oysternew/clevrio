export type PartnerLogoType = {
  img: {
    alt: string;
    image: string;
  };
};
export type TestimonialType = {
  _id: string;
  img: {
    alt: string;
    image: string;
  };
  name: string;
  company: string;
  testimony: string;
};

export type CourseType = {
  _id: string;
  img: {
    alt: string;
    image: string;
  };
  category: string;
  title: string;
  slug: string;
  course: number;
  duration: string;
  fee: number;
};

export type TeamType = {
  _id: string;
  img: {
    alt: string;
    image: string;
  };
  name: string;
  role: string;
  course: number;
  students: number;
  slug: string;
  socials: {
    url: string;
    socialMedia: string;
  }[];
};

export type PricingType = {
  _id: string;
  plan: string;
  price: number;
  features: {
    feature: string;
  }[];
  best?: boolean;
};

export type FaqType = {
  _id: string;
  question: string;
  answer: string;
};

export type BlogType = {
  _id: string;
  img: {
    alt: string;
    image: string;
  };
  date: string;
  category: string;
  title: string;
  slug: string;
};
export type IntroductionTradingType = {
  _id: string; // ID dokumenta
  mainTitle: string; // Glavni naslov
  subtitle: string; // Podnaslovni tekst
  bulletPoints: {
    subheading: string; // Podnaslov
    paragraph: string; // Paragraf ispod podnaslova
    listItems: string[]; // Lista stavki
  }[]; // Niz bullet point objekata
  conclusion: string; // Zaključak
  conclusionText: string; // Tekst ispod zaključka
};
