/** IT Services page content — sourced from the MagicMond Tech Sales Portfolio (July 2026). */

export const itHero = {
  h1Normal: 'IT services that ship',
  rotatingWords: ['Mobile Apps', 'Web Platforms', 'ERP Systems', 'E-commerce'],
  // 40–60 word answer paragraph — quoted directly by AI search engines
  answer:
    'MagicMond is an IT services company in Delhi, India, building mobile apps, web platforms, ERP systems, and e-commerce storefronts for startups and growing businesses. With 9 live products shipped across 6 industries, we handle design, development, launch, and post-launch growth under one roof.',
  cta: 'Get a Free Consultation',
};

export const itPillarsIntro =
  'Magicmond is a full-stack digital growth agency. We take businesses from zero to one, and scale them from one to a hundred — working at the intersection of design, technology, and marketing.';

export const itPillars = [
  { icon: 'Palette', title: 'Brand & Identity', desc: 'Visual identity systems, business collateral, and sales-ready design.' },
  { icon: 'Laptop', title: 'Web & App Development', desc: 'Mobile apps, web platforms, and admin systems built for scale.' },
  { icon: 'TrendingUp', title: 'Marketing & Sales Design', desc: 'Landing pages, funnels, and campaign creative that convert.' },
  { icon: 'Rocket', title: 'Digital Growth', desc: 'Performance marketing and social growth once the product ships.' },
];

export const itPillarsBanner = {
  highlight: '9 live products shipped',
  rest: ' across construction, sports media, real estate, wellness, fashion, astrology-tech, and jewelry.',
};

export const itStats = [
  { value: '100M+', label: "downloads on CREX, one of India's top cricket apps" },
  { value: '10,000+', label: 'contractors managing sites on OnsiteTeams' },
  { value: '1,00,000+', label: "customers trusting KR Ayurveda's wellness range" },
  { value: '300+', label: 'jewellers on the JewelFlow catalog platform' },
  { value: '200+', label: 'homes delivered through Reidius Infra' },
  { value: '6', label: 'industries served: construction, sports, real estate, wellness, fashion & jewelry' },
];

export interface ItPortfolioItem {
  icon: string;
  tag: string;
  name: string;
  tagline: string;
  built: string;
  metrics: { value: string; label: string }[];
  caseStudyHref?: string;
  linkLabel?: string;
}

export const itPortfolio: ItPortfolioItem[] = [
  {
    icon: 'HardHat',
    tag: 'CONSTRUCTION TECH',
    name: 'OnsiteTeams',
    tagline: "India's #1 construction management app, connecting site and office on one platform.",
    built:
      'We built the mobile app and web platform that lets contractors run every site from one place — labour attendance, material tracking, vendor billing, and approval chains that used to live across WhatsApp, Excel, and paper registers. Owners now get live visibility into project health without chasing site managers for updates.',
    metrics: [
      { value: '10,000+', label: 'contractors using the platform' },
      { value: '7–10%', label: 'typical reduction in project cost' },
      { value: '8', label: 'regional languages supported' },
    ],
    caseStudyHref: '/case-study-onsite',
    linkLabel: 'View case study',
  },
  {
    icon: 'Trophy',
    tag: 'SPORTS MEDIA',
    name: 'CREX (Cricket Exchange)',
    tagline: 'One of the highest-rated cricket apps in the world, built for fans who never want to miss a ball.',
    built:
      'We contributed to the live-score and fan-engagement experience that covers every major cricket series — ball-by-ball commentary, real-time win-probability, and fantasy team analysis, wrapped in a fast, ad-light interface. The app now ranks among the top cricket apps on both major app stores.',
    metrics: [
      { value: '100M+', label: 'downloads worldwide' },
      { value: '4.5★', label: 'average rating, 550K+ ratings' },
      { value: '1.6M+', label: 'downloads in a single month' },
    ],
    caseStudyHref: '/sports',
    linkLabel: 'Explore MagicMond Sports',
  },
  {
    icon: 'Building2',
    tag: 'REAL ESTATE / PROPTECH',
    name: 'Reidius Infra & Shri Yamuna Infra',
    tagline: 'Two real-estate brands, two different stories — one transparent, tech-first build process.',
    built:
      'For Reidius Infra (Jaipur), we built the project-tracking app that gives homeowners real-time visibility into expenses and site progress, backed by a dedicated-project-manager model. For Shri Yamuna Infra, we designed a brand and site for spiritually rooted residential communities in Vrindavan — refined design for a very different buyer.',
    metrics: [
      { value: '200+', label: 'homes delivered by Reidius Infra' },
      { value: '2 yr', label: 'free maintenance guarantee offered' },
      { value: '2', label: 'distinct brand experiences shipped' },
    ],
    caseStudyHref: '/case-study-reidius-infra',
    linkLabel: 'View case study',
  },
  {
    icon: 'Sparkles',
    tag: 'ASTROLOGY-TECH',
    name: 'Astrovedansh',
    tagline: 'Turning Vedic astrology into personalized, on-demand digital reports.',
    built:
      "We built two consumer-facing report tools — Perfect Timing and Perfect Career — that turn a birth chart into a personalized reading in minutes, plus Grah9, an internal admin panel that Astrovedansh's team uses to run marketing campaigns and manage sales operations behind the scenes.",
    metrics: [
      { value: '2', label: 'consumer report web-apps shipped' },
      { value: '1', label: 'internal admin platform (Grah9)' },
      { value: '10K+', label: 'people guided on career & life direction' },
    ],
    caseStudyHref: '/case-study-astrovedansh',
    linkLabel: 'View case study',
  },
  {
    icon: 'ShoppingBag',
    tag: 'D2C E-COMMERCE',
    name: 'Three D2C Storefronts',
    tagline: 'Makelen · KR Ayurveda · Shoemonkies — streetwear, wellness, and handcrafted footwear.',
    built:
      "We designed and built Shopify storefronts for three very different D2C brands: Makelen's oversized streetwear drops, KR Ayurveda's clinically-minded wellness range, and Shoemonkies' handcrafted leather shoes out of Agra. Each site was tuned for its own buyer — different pace, different story, same attention to conversion.",
    metrics: [
      { value: '3', label: 'D2C storefronts designed & built' },
      { value: '1,00,000+', label: 'customers served by KR Ayurveda' },
      { value: '100%', label: 'handcrafted leather at Shoemonkies' },
    ],
    caseStudyHref: '/case-study-shoemonkies',
    linkLabel: 'View case study',
  },
  {
    icon: 'Gem',
    tag: 'JEWELRY-TECH',
    name: 'Solrio',
    tagline: "A secure digital catalog that brings a jeweller's full collection to a customer's fingertips.",
    built:
      "We built Solrio's mobile catalog app on a screenshot-protected platform purpose-built for the jewelry trade — high-resolution product browsing, live inventory sync, and controlled sharing so designs stay protected while still reaching customers wherever they are.",
    metrics: [
      { value: '300+', label: 'jewellers on the underlying platform' },
      { value: '65,000+', label: 'registered buyers reached' },
      { value: '22 days', label: 'typical base build turnaround' },
    ],
  },
];

export const itDeliver = [
  { icon: 'Smartphone', title: 'Mobile Apps', desc: 'Native & cross-platform iOS/Android products.' },
  { icon: 'Monitor', title: 'Web Platforms', desc: 'Marketing sites, portals, and dashboards.' },
  { icon: 'Settings', title: 'Admin & ERP Systems', desc: 'Internal tools for sales, ops, and finance.' },
  { icon: 'Store', title: 'E-commerce', desc: 'Shopify & custom storefronts built to convert.' },
  { icon: 'Palette', title: 'UI/UX Design', desc: "Interfaces tuned to each brand's buyer." },
  { icon: 'Megaphone', title: 'Growth Marketing', desc: "Performance campaigns once you're live." },
];

export const itWhy = [
  { icon: 'Rocket', title: 'End-to-end delivery', desc: 'One team from brand strategy to app store launch — no handoffs between vendors.' },
  { icon: 'Users', title: 'Proven across industries', desc: 'Construction, sports media, real estate, wellness, fashion, astrology-tech, and jewelry — shipped and live.' },
  { icon: 'Zap', title: 'Founder-led execution', desc: 'Direct access to the people building your product, not a layer of account managers.' },
  { icon: 'Headphones', title: 'Support that continues', desc: 'We stay on after launch — iterating, fixing, and growing the product with you.' },
];

export const itFaqs = [
  {
    q: 'How much does app development cost in Delhi?',
    a: 'Cost depends on features, platforms, and complexity. A focused MVP starts lower than a multi-platform product with admin systems. Book a free consultation and we will scope a fixed, transparent quote for your idea.',
  },
  {
    q: 'How long does it take to build an app or website?',
    a: 'A marketing website or storefront typically ships in 3–6 weeks. Mobile apps and platforms range from 8–16 weeks depending on scope. We share a milestone plan before we start.',
  },
  {
    q: 'Do you develop both Android and iOS apps?',
    a: 'Yes — we build native and cross-platform apps covering both Android and iOS, like CREX (100M+ downloads) and OnsiteTeams (10,000+ contractors).',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. We stay on after launch — iterating, fixing, and growing the product with you. Reidius Infra homeowners, for example, rely on an app we continue to maintain and improve.',
  },
  {
    q: 'Can you redesign or fix an existing app or website?',
    a: 'Absolutely. We regularly take over existing products for redesigns, performance fixes, and feature additions — starting with a free audit of the current build.',
  },
  {
    q: 'Do you also handle marketing after the product is built?',
    a: 'Yes — MagicMond is full-stack: performance marketing, social growth, and content once your product ships, so the same team that built it also grows it.',
  },
];
