import { Helmet } from 'react-helmet-async';

interface SeoProps {
  /** Page title — keep ≤60 chars. If omitted, falls back to the global default. */
  title?: string;
  /** Meta description — 150-160 chars recommended. */
  description?: string;
  /** Canonical URL — must be the full absolute URL of THIS page. */
  canonical?: string;
  /** Open-graph / Twitter image URL (absolute). Defaults to site-wide OG banner. */
  ogImage?: string;
  /** Set to true on /thank-you and other conversion pages to prevent indexing. */
  noIndex?: boolean;
  /** og:type — defaults to 'website' */
  ogType?: string;
}

const DEFAULT_OG_IMAGE = 'https://magicmond.com/og-image.png';

export function Seo({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  ogType = 'website',
}: SeoProps) {
  const fullTitle = title
    ? `${title} | MagicMond`
    : 'App Development & Marketing Company in Mumbai | MagicMond';

  const metaDescription =
    description ??
    'MagicMond is a Mumbai-based app development, UI/UX design, website development & performance marketing company. 20+ brands scaled. Get a free consultation.';

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta
        name="robots"
        content={
          noIndex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content="MagicMond" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
