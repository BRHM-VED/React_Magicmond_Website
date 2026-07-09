import type { NewCaseStudy } from '../common/types';

export const astrovedanshCaseStudy: NewCaseStudy = {
  slug: 'case-study-astrovedansh',
  title: 'AstroVedansh Case Study — MagicMond',
  metaDescription: 'Astro Vedansh sees a 1200% Growth in Revenues in the very second month with MagicMond. ₹10 Crore annual revenue stream for Astro Vedansh.',
  brand: {
    name: 'AstroVedansh',
    logo: '/assets/images/caseStudy/AstroVedansh/Growth.webp',
    accentColor: '#c055e5',
    visitUrl: 'https://astrovedansh.com/',
    category: 'Creator',
    tagline: '₹1 Crore Annual Revenue stream for AstroVedansh',
  },
  heroTitle: `₹10 Crore annual\nrevenue stream\nfor Astro Vedansh`,
  heroSubtitle: `Astro Vedansh sees a 1200% Growth in Revenues in the very second month with MagicMond.`,
  blocks: [
    {
      sectionNumber: '01',
      label: 'HIGHLIGHTS',
      layoutType: 'text-only',
      description: [
        `When we first met Astro Vedansh, he had more than 100,000 followers on Instagram, yet he was able to make a revenue of just ₹30,000 a month through Astrology consultations on hourly basis.`,
      ],
    },
    {
      sectionNumber: '02',
      label: 'CHALLENGE',
      layoutType: 'text-only',
      description: [
        `We at MagicMond understand the time crunch that comes with being a creator and how it gets really difficult to explore revenue opportunities other than brand collaborations. Hence, creators always seek a strong team to explore and execute new growth possibilities for their niche.`,
      ],
    },
    // Image after CHALLENGE — LandingPage
    {
      sectionNumber: '',
      label: '',
      layoutType: 'full-width-image',
      images: ['/assets/images/caseStudy/AstroVedansh/LandingPage.webp'],
      description: [],
    },
    {
      sectionNumber: '03',
      label: 'TAILORED SOLUTION',
      layoutType: 'text-only',
      description: [
        `We digged deep into the Astrology industry and discovered some business and revenue opportunities for Astro Vedansh. Within a couple of meetings with Astro Vedansh, we were able to finalise the growth path. We worked hand in hand with the astrologer towards building some digital products that we could push through our growth marketing expertise.`,
      ],
    },
    {
      sectionNumber: '04',
      label: 'RESEARCH & EXECUTION',
      layoutType: 'text-only',
      description: [
        `We managed to build the digital products within a period of 3 weeks. As soon as they were ready, our marketing experts prepared the funnel and framework to fetch revenue out of these digital products. Marketing channels were created, target audience was identified, campaigns were prepared to not just target the audience but also convert them and the funnel was launched, all in a span of two weeks.`,
      ],
    },
    // Image after R&E — Reports
    {
      sectionNumber: '',
      label: '',
      layoutType: 'full-width-image',
      images: ['/assets/images/caseStudy/AstroVedansh/Reports.webp'],
      description: [],
    },
    {
      sectionNumber: '05',
      label: 'RESULTS',
      layoutType: 'metrics-grid',
      metrics: [
        { label: 'Revenue Growth', value: '1200%', number: '1200', suffix: '%', isNumeric: true },
        { label: 'First Month Growth', value: '450%', number: '450', suffix: '%', isNumeric: true },
        { label: 'Annual Revenue', value: '1Cr+', number: '1', suffix: 'Cr+', isNumeric: true },
      ],
      description: [
        `AstroVedansh sees growth stats compounding month over month:`,
      ],
    },
    {
      sectionNumber: '06',
      label: 'OUTCOME',
      layoutType: 'text-only',
      description: [
        `In the first month from launching the campaign, Vedansh saw a 450% increase in revenue. In the second month the revenue was uplifted by 1200% and at the end of the year the overall revenue was above 1 Crore INR.`,
      ],
    },
    {
      sectionNumber: '07',
      label: 'GROWTH PARTNERSHIP',
      layoutType: 'text-only',
      description: [
        `We're still working as the revenue growth partners of Astro Vedansh and along with scaling the digital products, we also started executing an e-commerce store and opened doors for a new revenue stream. While we take proud on the entire journey with Astro Vedansh, we still look forward to exploring more growth possibilities in near future.`,
      ],
    },
  ],
};

export const astrovedanshStripImages: string[] = [
  '/assets/images/caseStudy/AstroVedansh/WebApp.webp',
];
