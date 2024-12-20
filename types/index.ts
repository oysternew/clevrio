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
export type BanerPrviType = {
  _id: string; // ID dokumenta
  title: string; // Naslov sekcije
  content: string; // Glavni tekst sekcije
  list: string[]; // Lista stavki (npr. Currency Pairs, Exchange Rates, itd.)
  image: {
    asset: {
      url: string; // URL slike
    };
  };
  link: string; // Tekst za link (npr. "Read More")
  linkUrl: string; // URL za "Read More" link
};
export type SemaStraniceType = {
  title: string; // Naslov stranice
  slug: {
    _type: 'slug'; // Sanity-jev tip za slug
    current: string; // Vrednost sluga (npr. "naslov-stranice")
  };
  images: string[]; // Niz URL-ova slika
  content: Array<{
    _key: string; // Jedinstveni ključ za blok
    _type: string; // Tip bloka (npr. "block")
    children: Array<{
      _key: string; // Jedinstveni ključ za dete
      _type: string; // Tip (npr. "span")
      text: string; // Tekst unutar bloka
    }>;
    style?: string; // Stil bloka (npr. "normal", "h1")
  }>; // Blok sadržaj
  list: string[]; // Lista stavki
  link: string; // Tekst linka
  linkUrl: string; // URL linka
};



