import type { NewCaseStudy } from '../common/types';

export const shoemonkiesCaseStudy: NewCaseStudy = {
  slug: 'case-study-shoemonkies',
  title: 'ShoeMonkies Case Study — MagicMond',
  metaDescription: 'How MagicMond helped ShoeMonkies transition from a loss-making Amazon business to a profitable, high-growth D2C brand in 3 months.',
  brand: {
    name: 'ShoeMonkies',
    logo: '/assets/images/caseStudy/ShowMonkie/LandingPage.webp',
    accentColor: '#c055e5',
    visitUrl: 'https://shoemonkies.com/',
    category: 'D2C Footwear',
    tagline: "Shoemonkies' 360-Degree Approach: Identity, Pricing, and Digital Growth",
  },
  heroTitle: `Shoemonkies' 360-Degree\nApproach: Identity, Pricing,\nand Digital Growth`,
  heroSubtitle: 'How MagicMond helped ShoeMonkies transition from a loss-making Amazon business to a profitable, high-growth D2C brand in 3 months.',
  blocks: [
    {
      sectionNumber: '01',
      label: 'HIGHLIGHTS',
      layoutType: 'text-only',
      description: [
        `Shoemonkies is an Indian D2C brand that sells premium quality leather footwear at affordable prices. Despite generating ₹82 Lakh annually on Amazon, there was a big problem – they weren't making any profit. In fact, they were incurring losses of about 5-10% annually.`,
      ],
    },
    {
      sectionNumber: '02',
      label: 'CHALLENGE',
      layoutType: 'text-only',
      description: [
        `The highly competitive and saturated market, coupled with Amazon's commission structure made it difficult to make any profit. The brand also struggled to convey its value proposition, that is, offering stylish, premium quality leather shoes at affordable prices.`,
      ],
    },
    // Image after CHALLENGE — SecondLandingPage
    {
      sectionNumber: '',
      label: '',
      layoutType: 'full-width-image',
      images: ['/assets/images/caseStudy/ShowMonkie/SecondLandingPage.webp'],
      description: [],
    },
    {
      sectionNumber: '03',
      label: 'TAILORED SOLUTION',
      layoutType: 'text-only',
      description: [
        `To overcome these challenges, our first course of action was to establish ShoeMonkies' identity as a brand. Our target audience comprised young professionals seeking quality leather shoes at reasonable prices. Our aim was to give ShoeMonkies an identity that truly resonated with this demographic – one that embodies youthfulness and a sense of adventure.`,
        `Additionally, pricing strategies were devised to ensure profitability without deterring first-time customers.`,
      ],
    },
    {
      sectionNumber: '04',
      label: 'RESEARCH & EXECUTION',
      layoutType: 'text-only',
      description: [
        `We started running ads on Facebook and Instagram, conducting experiments along the way. Through these ads we were able to identify 3 winning products. We shifted our advertising efforts exclusively on these acquisition/winning products, and the results? Shoemonkies sold 1600 shoes through their newly launched website in 3 months. This achievement stands in stark contrast to the previous year when it took them 7 months to reach the same sales volume.`,
      ],
    },
    // Images after R&E — two ad creatives
    {
      sectionNumber: '',
      label: '',
      layoutType: 'full-width-image',
      images: ['/assets/images/caseStudy/ShowMonkie/FirstAdvertise.webp'],
      description: [],
    },
    {
      sectionNumber: '',
      label: '',
      layoutType: 'full-width-image',
      images: ['/assets/images/caseStudy/ShowMonkie/secondAdvertise.webp'],
      description: [],
    },
    {
      sectionNumber: '05',
      label: 'RESULTS',
      layoutType: 'metrics-grid',
      metrics: [
        { label: 'Building a Brand in', value: '3 Months', number: '3', suffix: 'Months', isNumeric: true },
        { label: 'Shoes Sold via Website', value: '1600', number: '1600', isNumeric: true },
        { label: 'Sales Timeline vs Prior', value: 'Down 57% (from 7 months to 3 months)', prefix: 'Down', number: '57', suffix: '%', details: 'from 7 months to 3 months', isNumeric: true },
      ],
      description: [
        `The new direct-to-consumer channel results achieved within 3 months:`,
      ],
    },
    {
      sectionNumber: '06',
      label: 'OUTCOME',
      layoutType: 'text-only',
      description: [
        `Shoemonkies successfully transitioned from a loss making, Amazon-centric model to a thriving D2C brand. By establishing a unique identity, implementing strategic pricing, and leveraging targeted digital advertising, the brand not only increased sales but also achieved profitability.`,
      ],
    },
    {
      sectionNumber: '07',
      label: 'GROWTH PARTNERSHIP',
      layoutType: 'text-only',
      description: [
        `Following the successful D2C launch, we continue to work as strategic growth partners with ShoeMonkies, optimizing their marketing spend, introducing new product lines, and expanding their customer acquisition channels across India.`,
      ],
    },
  ],
};

export const shoemonkiesStripImages: string[] = [
  '/assets/images/caseStudy/ShowMonkie/detailsData.webp',
];
