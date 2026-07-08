export interface NavLink {
  label: string;
  to: string;
  badge?: string;
  external?: boolean;
}

export interface Service {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
}

export interface ProcessStep {
  badge: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  symbol?: string;
  icon?: string;
  avatars?: string[];
}

export interface CaseSlide {
  logo?: string;
  logoText?: string;
  logoClass?: string;
  titleLines: string[];
  serifLine: string;
  description: string;
  href: string;
  metricLabel: string;
  metric: string;
}

export interface BrandTile {
  image: string;
  alt: string;
  meta?: boolean; // Meta tile renders logo + caption
}

export interface ArticleBlock {
  type: "label" | "h3" | "h4" | "p" | "figure" | "pair";
  text?: string;
  image?: string;
  images?: [string, string];
  caption?: string;
  alt?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  metaDescription: string;
  brand: { image?: string; tile?: boolean; round?: boolean; name?: string; nameClass?: string; sub?: string };
  visitUrl: string;
  heading: string;
  subheading?: string;
  blocks: ArticleBlock[];
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudyBlock {
  sectionNumber: string; // e.g., "01", "02"
  label: string;         // e.g., "Highlight", "Challenge"
  title?: string;        // Optional sub-title
  description: string[]; // Paragraphs of text
  images?: string[];     // Paths to images/illustrations (leave empty for now)
  layoutType: 'text-only' | 'text-with-image' | 'text-with-image-pair' | 'metrics-grid';
  metrics?: CaseStudyMetric[];
}

export interface NewCaseStudy {
  slug: string;
  title: string;
  metaDescription: string;
  brand: {
    name: string;
    logo?: string; // Brand logo image path
    accentColor: string; // e.g., "#00ac79" or "#c055e5"
    visitUrl: string;
    category?: string;
    tagline?: string;
  };
  heroTitle: string;
  heroSubtitle: string;
  blocks: CaseStudyBlock[];
}

