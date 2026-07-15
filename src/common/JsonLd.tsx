/** JSON-LD structured data helpers.
 *  Import the component you need and drop it anywhere in your JSX —
 *  react-helmet-async hoists all <script> tags into <head> automatically.
 */

import { Helmet } from 'react-helmet-async';

// ---------------------------------------------------------------------------
// Organization + LocalBusiness (use on homepage)
// ---------------------------------------------------------------------------

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://magicmond.com/#organization',
        name: 'MagicMond',
        url: 'https://magicmond.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://magicmond.com/assets/icons/MagicmondLogo.png',
        },
        description:
          'MagicMond is a software development and digital growth company in Mumbai, India, specialising in app development, website development, UI/UX design, ERP systems, and performance marketing.',
        email: 'hello@magicmond.com',
        sameAs: [
          'https://www.instagram.com/magicmond/',
          'https://www.linkedin.com/company/magicmond',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://magicmond.com/#business',
        name: 'MagicMond',
        url: 'https://magicmond.com',
        image: 'https://magicmond.com/og-image.png',
        description:
          'MagicMond is an app development, UI/UX design, and digital marketing company in Mumbai, India.',
        email: 'hello@magicmond.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
        areaServed: 'IN',
        priceRange: '₹₹',
        sameAs: [
          'https://www.instagram.com/magicmond/',
          'https://www.linkedin.com/company/magicmond',
        ],
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// ---------------------------------------------------------------------------
// WebPage (use on every page alongside OrganizationSchema)
// ---------------------------------------------------------------------------

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function WebPageSchema({ name, description, url }: WebPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    isPartOf: { '@id': 'https://magicmond.com/#organization' },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// ---------------------------------------------------------------------------
// Article / Case Study
// ---------------------------------------------------------------------------

interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  /** ISO date string e.g. 2025-01-01 */
  datePublished?: string;
}

export function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    datePublished,
    author: {
      '@type': 'Organization',
      name: 'MagicMond',
      url: 'https://magicmond.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MagicMond',
      logo: {
        '@type': 'ImageObject',
        url: 'https://magicmond.com/assets/icons/MagicmondLogo.png',
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
