import type { NewCaseStudy } from '../common/types';

export const reidiusCaseStudy: NewCaseStudy = {
  slug: 'case-study-reidius-infra',
  title: 'Reidius Infra Case Study — MagicMond',
  metaDescription: 'How MagicMond helped Jaipur residential construction firm Reidius Infra scale to 60+ clients in 1 year and build a predictable growth engine.',
  brand: {
    name: 'Reidius Infra',
    logo: '/assets/images/caseStudy/ReidiusInfra/dashboard.png',
    accentColor: '#3e0078',
    visitUrl: 'https://reidiusinfra.com/',
    category: 'Tech-enabled Construction',
    tagline: 'From contractor to category brand: Reidius Infra',
  },
  heroTitle: `Reidius Infra - 60+ clients\nin 1 year`,
  heroSubtitle: 'How a Jaipur residential construction firm built a predictable growth engine — and stopped competing on "we build houses."',
  topImage: '/assets/images/caseStudy/ReidiusInfra/tabWebsite.png',
  topImageCaption: 'Sales landing page',
  blocks: [
    {
      sectionNumber: '01',
      label: 'HIGHLIGHTS',
      layoutType: 'text-only',
      description: [
        'When we first met Reidius Infra, they had everything a good construction company should — completed projects, a capable team, and quality delivery. But to the market, they looked like every other architecture-and-construction firm. Homeowners couldn\'t say why they were different. The problem was never the work. It was perception, positioning, and the lack of a system to grow predictably.',
      ],
    },
    {
      sectionNumber: '02',
      label: 'CHALLENGE',
      layoutType: 'text-only',
      description: [
        'We at MagicMond understand that for a construction firm, growth often depends on referrals and luck. Reidius had a website that only collected enquiries, generic "we do architecture and construction" messaging, and no structured engine connecting branding, leads, sales, and operations. They didn\'t need more noise — they needed a foundation that could scale.',
      ],
    },
    {
      sectionNumber: '03',
      label: 'TAILORED SOLUTION',
      layoutType: 'text-with-image',
      images: ['/assets/images/caseStudy/ReidiusInfra/portFolio.png'],
      imageCaptions: ['Portfolio'],
      description: [
        'We started with the most important shift: positioning. Instead of "we build houses," Reidius became the partner who helps homeowners build their dream home without the stress and chaos of managing it themselves. We rebuilt their digital presence mobile-first (where nearly all their visitors actually were) to educate and build trust before asking for a single detail.',
        'The real insight: Reidius wasn\'t selling construction. They were selling peace of mind.',
      ],
    },
    {
      sectionNumber: '04',
      label: 'RESEARCH & EXECUTION',
      layoutType: 'text-with-image-pair',
      images: [
        '/assets/images/caseStudy/ReidiusInfra/webApp.png',
      ],
      imageCaptions: ['Reidius One CRM'],
      description: [
        'We engaged buyers earlier in their journey instead of waiting for them to be ready. A Vastu guide became a lead magnet that attracted genuine home-builders, distributed through social campaigns. We added hyperlocal offline branding across Jaipur for repeated recall, then layered in targeted Meta and Google campaigns aimed only at high-intent prospects planning to build.',
      ],
    },
    {
      sectionNumber: '05',
      label: 'RESULTS',
      layoutType: 'metrics-grid',
      metrics: [
        { label: 'Meeting alignment rate', value: 'Upto 23% (from 15% prior month, 12% earlier)' },
        { label: 'Cost per qualified meetings', value: '₹ 4208 (On the top channels)' },
        { label: 'Cost per lead', value: 'Held under the ₹ 1000' },
        { label: 'Sales closed', value: '₹ 5 Cr (Across channels)' },
      ],
      description: [
        'The primary campaign alone drove ~79% of leads at a healthy cost — clear proof the targeting was working.',
      ],
    },
    {
      sectionNumber: '06',
      label: 'OUTCOME',
      layoutType: 'text-with-image',
      images: ['/assets/images/caseStudy/ReidiusInfra/website.png'],
      title: 'Reidius infra website',
      description: [
        'Reidius moved from running scattered marketing to operating a predictable, measurable growth system. Lead quality rose, meeting alignment climbed month over month, and they could finally see their pipeline clearly — which channel drove which sale, at what cost. To go deeper, we implemented call-tracking and CRM so sales management became data-driven instead of guesswork.',
        'What started as a website redesign became a full business transformation.',
      ],
    },
    {
      sectionNumber: '07',
      label: 'GROWTH PARTNERSHIP',
      layoutType: 'text-only',
      description: [
        'We\'re now long-term growth partners. Beyond marketing, we\'ve helped build a proprietary operating platform to manage the entire customer journey — from first enquiry to site execution — so the business can scale without breaking. Today Reidius is working toward franchise expansion and investment. The goal is no longer building houses. It\'s building a category-defining residential brand.',
        'Results based on the Reidius Infra Marketing Performance Report (May 2026) and engagement records, prepared by MagicMond.',
      ],
    },
  ],
};

export const reidiusStripImages: string[] = [
  '/assets/images/caseStudy/ReidiusInfra/advertise.png',
  '/assets/images/caseStudy/ReidiusInfra/appFeatures.png',
];
