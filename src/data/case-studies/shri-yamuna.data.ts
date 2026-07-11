import type { NewCaseStudy } from '../common/types';

export const shriYamunaCaseStudy: NewCaseStudy = {
  slug: 'case-study-shri-yamuna-infra',
  title: 'Shri Yamuna Infra Case Study — MagicMond',
  metaDescription: `SYI - 120 site visits in 3 months for a newly launched project. Making credibility visible: Shri Yamuna Infra. How a respected-but-invisible Vrindavan developer built a demand engine.`,
  brand: {
    name: 'Shri Yamuna Infra',
    logo: '/assets/images/caseStudy/SriYamunaInfra/syi_dashboard.webp',
    accentColor: '#e08c00',
    visitUrl: 'https://shriyamunainfra.com/',
    category: 'Real Estate',
    tagline: 'Making credibility visible: Shri Yamuna Infra',
  },
  heroTitle: `SYI - 120 site visits in\n3 months for a newly\nlaunched project`,
  heroSubtitle: `How a respected-but-invisible Vrindavan developer built a demand engine reaching buyers from Delhi to the USA.`,
  blocks: [
    {
      sectionNumber: '01',
      label: 'HIGHLIGHTS',
      layoutType: 'text-only',
      description: [
        `When we first met Shri Yamuna Infra, they had something most developers would envy: years of completed projects and real trust within Vrindavan. But almost all their business came through brokers and referrals. To anyone discovering them online, there was nothing to find. They didn't have a credibility problem — they had a visibility problem. All that trust existed, but the market simply couldn't see it.`,
      ],
    },
    {
      sectionNumber: '02',
      label: 'CHALLENGE',
      layoutType: 'text-only',
      description: [
        `We at MagicMond understand that being invisible online has a real cost. Because new buyers couldn't find or validate SYI for themselves, the company had to lean on brokers and referrals to reach them — which meant no direct customer relationships and lead flow they couldn't control or predict. The business was growing, but it was growing on someone else's terms.`,
      ],
    },
    // Image after CHALLENGE — gallery
    {
      sectionNumber: '',
      label: '',
      layoutType: 'full-width-image',
      images: ['/assets/images/caseStudy/SriYamunaInfra/syiBook.webp'],
      description: [],
    },
    {
      sectionNumber: '03',
      label: 'TAILORED SOLUTION',
      layoutType: 'text-only',
      description: [
        `We started where it mattered most — trust. We built the founder's public presence and the company's brand story, putting the leadership and their contribution to Vrindavan's growth front and centre. Then we created a real digital foundation: a landing page built not just to capture leads, but to validate the company. For many buyers, this became their first real interaction with the brand.`,
      ],
    },
    // Image between TAILORED SOLUTION and R&E — syiWebApp
    {
      sectionNumber: '',
      label: '',
      layoutType: 'full-width-image',
      images: ['/assets/images/caseStudy/SriYamunaInfra/syiWebApp.webp'],
      description: [],
    },
    {
      sectionNumber: '04',
      label: 'RESEARCH & EXECUTION',
      layoutType: 'text-only',
      description: [
        `Then we did something most agencies wouldn't. We organised a large community event with spiritual leaders, existing customers, and prospects — and used it to officially launch a new project. Credibility-building and demand-generation in one move. We layered city-wide billboards for constant recall, then unlocked the real opportunity: Vrindavan doesn't just attract locals. It attracts NRIs, investors, retirees, and second-home buyers. So we pointed targeted Meta campaigns at Delhi NCR, tier-1 cities, and NRI audiences who'd never have found SYI through a broker.`,
      ],
    },
    // Image after R&E — syiBook
    {
      sectionNumber: '',
      label: '',
      layoutType: 'full-width-image',
      images: ['/assets/images/caseStudy/SriYamunaInfra/advertiseBanner.webp'],
      description: [],
    },
    {
      sectionNumber: '05',
      label: 'RESULTS',
      layoutType: 'metrics-grid',
      metrics: [
        { label: 'Site visits', value: '120', number: '120', isNumeric: true },
        { label: 'Total leads', value: '1180', number: '1180', isNumeric: true },
        { label: 'Total sales', value: '13', number: '13', isNumeric: true },
        { label: 'Revenue', value: '10.79 CR', number: '10.79', suffix: 'CR', isNumeric: true },
      ],
      description: [
        'The engine started compounding month over month:',
      ],
    },
    {
      sectionNumber: '06',
      label: 'OUTCOME',
      layoutType: 'text-only',
      description: [
        'In a single month, site visits — the truest signal of real buying intent — jumped 66%. Lead quality rose, the qualified-to-visit rate climbed sharply, and the strongest conversion pipeline to date was building for the months ahead. More importantly, SYI was no longer waiting on brokers to decide their growth. They were generating direct demand, on their own terms, from audiences far beyond Vrindavan.',
        'What started as "make us visible" became a complete acquisition system.',
      ],
    },
    {
      sectionNumber: '07',
      label: 'GROWTH PARTNERSHIP',
      layoutType: 'text-only',
      description: [
        'We\'re proud to be SYI\'s long-term growth partners. With founder branding, a digital home, community trust, city-wide awareness, and investor-focused campaigns now working together, the next phase is scale — turning a strong visit pipeline into consistent closings and expanding reach to new buyer pools. The goal is no longer selling units. It\'s building a real estate brand that compounds.',
        'Results based on the Shri Yamuna Infra Marketing Performance Report and engagement records, prepared by MagicMond.',
      ],
    },
  ],
};

export const shriYamunaStripImages: string[] = [
  '/assets/images/caseStudy/SriYamunaInfra/syiGallary.webp',
];
