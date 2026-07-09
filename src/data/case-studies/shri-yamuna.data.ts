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
        {
          label: 'Meeting alignment rate',
          value: 'Upto 23% ((from 15% prior month, 12% earlier))',
          prefix: 'Upto',
          number: '23',
          suffix: '%',
          details: '(from 15% prior month, 12% earlier)',
          isNumeric: true,
        },
        {
          label: 'Cost per qualified meetings',
          value: '4208% (On the top channels)',
          number: '4208',
          suffix: '%',
          details: 'On the top channels',
          isNumeric: true,
        },
        {
          label: 'Cost per lead',
          value: '1000% (Held under the)',
          number: '1000',
          suffix: '%',
          details: 'Held under the',
          isNumeric: true,
        },
        {
          label: 'Sales closed',
          value: '5 M ((Across channels))',
          number: '5',
          suffix: 'M',
          details: '(Across channels)',
          isNumeric: true,
        },
      ],
      description: [
        'The engine started compounding month over month:',
      ],
    },
    {
      sectionNumber: '06',
      label: 'TAILORED SOLUTION',
      layoutType: 'text-only',
      description: [
        'Reidius moved from running scattered marketing to operating a predictable, measurable growth system. Lead quality rose, meeting alignment climbed month over month, and they could finally see their pipeline clearly — which channel drove which sale, at what cost. To go deeper, we implemented call-tracking and CRM so sales management became data-driven instead of guesswork.',
        'What started as a website redesign became a full business transformation.',
      ],
    },
    {
      sectionNumber: '07',
      label: 'RESEARCH & EXECUTION',
      layoutType: 'text-only',
      description: [
        'We\'re now long-term growth partners. Beyond marketing, we\'ve helped build a proprietary operating platform to manage the entire customer journey – from first enquiry to site execution – so the business can scale without breaking. Today Reidius is working toward franchise expansion and investment. The goal is no longer building houses. It\'s building a category-defining residential brand.',
        'Results based on the Reidius Infra Marketing Performance Report (May 2026) and engagement records, prepared by MagicMond.',
      ],
    },
  ],
};

export const shriYamunaStripImages: string[] = [
  '/assets/images/caseStudy/SriYamunaInfra/syiGallary.webp',
];
