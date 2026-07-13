import type { NewCaseStudy } from '../common/types';

export const onsiteCaseStudy: NewCaseStudy = {
  slug: 'case-study-onsite',
  title: 'Onsite Case Study — MagicMond',
  metaDescription: 'How Onsite went from 15L to 40L. A predictable pipeline for a construction SaaS platform. How we cut cost per sales by 25% and built a repeatable growth engine.',
  brand: {
    name: 'Onsite',
    logo: '/assets/images/caseStudy/Onsite/dashboard.webp',
    accentColor: '#0055cc',
    visitUrl: 'https://onsite.in/',
    category: 'SaaS',
    tagline: 'A predictable pipeline for a construction SaaS platform.',
  },
  heroTitle: 'How Onsite went from\n15 to 40L',
  heroSubtitle: 'How we cut cost per sales by 25% and built a repeatable\ngrowth engine — by selling to the buyer, not the user.',
  blocks: [
    {
      sectionNumber: '01',
      label: 'HIGHLIGHTS',
      layoutType: 'text-only',
      description: [
        'When we first met the client — a construction-management software platform — they had a strong product, a capable sales team, and leads coming in from ads. On paper, everything looked fine. But growth still felt random. They were generating a healthy volume of leads, yet fewer than half were the right kind of customer, and the founders were pulled into every deal.',
      ],
    },
    {
      sectionNumber: '02',
      label: 'CHALLENGE',
      layoutType: 'text-only',
      description: [
        'We at MagicMond understand that a good product and a flow of leads don\'t automatically create growth. Their marketing was reactive — no clear positioning, no defined buyer, and messaging built around features instead of problems. The team was great at sales and product, but nobody inside owned branding, customer psychology, or a real marketing system. They needed a foundation, not just more ads.',
      ],
    },
    // Image after CHALLENGE, before TAILORED SOLUTION
    {
      sectionNumber: '',
      label: '',
      layoutType: 'full-width-image',
      images: ['/assets/images/caseStudy/Onsite/saveMonAndTime.webp'],
      description: [],
    },
    {
      sectionNumber: '03',
      label: 'TAILORED SOLUTION',
      layoutType: 'text-only',
      description: [
        'Instead of rushing to launch campaigns, we started at the root. We ran workshops with the founders and built a complete sales portfolio — which became a deep product discovery exercise. Documenting every feature and workflow showed us what the product really solved and what customers actually cared about. From there, we mapped personas and built positioning around real pain, not guesses.',
      ],
    },
    {
      sectionNumber: '04',
      label: 'RESEARCH & EXECUTION',
      layoutType: 'text-only',
      description: [
        'The biggest breakthrough came from studying real sales calls. We found the pain behind the pain — project delays weren\'t really about time, they were about lost client trust; poor reporting wasn\'t about data, it was about bad decisions.',
        'And we found something that changed everything: the people using the product weren\'t the people buying it. The operational teams used the software daily, but the business owners signed the cheques. So we shifted all messaging from operational features to business outcomes — profitability, control, accountability, growth.',
      ],
    },
    // Image after RESEARCH & EXECUTION, before RESULTS
    {
      sectionNumber: '',
      label: '',
      layoutType: 'full-width-image',
      images: ['/assets/images/caseStudy/Onsite/AppStoreListing.webp'],
      description: [],
    },
    {
      sectionNumber: '05',
      label: 'RESULTS',
      layoutType: 'metrics-grid',
      metrics: [
        { label: 'Total leads', value: '4900', number: '4900', isNumeric: true },
        { label: 'Demos', value: '2800+', number: '2800', suffix: '+', isNumeric: true },
        { label: 'Sales', value: '319+', number: '319', suffix: '+', isNumeric: true },
        { label: 'Revenue', value: '2.2 CR', number: '2.2', suffix: 'CR', isNumeric: true },
      ],
      description: [
        'Then we rebuilt the funnel around that insight. We focused on fit over volume, cut the campaigns bringing in the wrong people, and doubled down on what worked. The results:',
      ],
    },
    {
      sectionNumber: '06',
      label: 'OUTCOME',
      layoutType: 'text-only',
      description: [
        'In about three months, the client went from scattered marketing activities to a structured brand and communication system. The numbers followed: lower spend, higher lead quality, and a cost per strong prospect that dropped nearly 25%. Their funnel became predictable and forecastable — something they could finally plan around instead of guess.',
        'Most importantly, they now knew exactly who was buying and why. That clarity is the foundation everything else scales on.',
      ],
    },
    {
      sectionNumber: '07',
      label: 'GROWTH PARTNERSHIP',
      layoutType: 'text-only',
      description: [
        'We see this as a long-term growth partnership. With the right buyer identified and the messaging dialled in, the next phase is scale — more channels, a follow-up system so no good lead goes cold, and a sales playbook that takes them from a predictable pipeline to a much bigger one. We\'re proud of the journey so far, and we\'re just getting started.',
      ],
    },
  ],
};

/** Strip images for the scrolling ad creative section in CsOutcomeSection.
 *  These are the horizontal ad cards (landscape format) shown in the grey strip. */
export const onsiteStripImages: string[] = [
  '/assets/images/caseStudy/Onsite/Advertise.webp',
];
