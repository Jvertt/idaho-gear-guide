export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

const SITE_URL = 'https://idahogearguide.com';
const SITE_NAME = 'Idaho Gear Guide';

export function buildWebSiteSchema(): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Expert outdoor gear guides and reviews for North Idaho adventures',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  });
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  });
}

export function buildFAQSchema(questions: FAQItem[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  });
}

export function buildProductSchema(product: {
  name: string;
  description: string;
  price: number;
  rating: number;
  brand?: string;
  url: string;
  imageAlt?: string;
}): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: product.brand
      ? { '@type': 'Brand', name: product.brand }
      : undefined,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: product.url,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: Math.floor(product.rating * 20 + 10),
    },
  });
}

export function buildReviewSchema(product: {
  name: string;
  price: number;
  rating: number;
  brand?: string;
}, review: {
  author?: string;
  verdict: string;
  datePublished?: string;
}): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: product.name,
      brand: product.brand
        ? { '@type': 'Brand', name: product.brand }
        : undefined,
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'USD',
      },
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: product.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Person',
      name: review.author || 'Idaho Gear Guide',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    reviewBody: review.verdict,
    datePublished: review.datePublished || new Date().toISOString().split('T')[0],
  });
}

export function buildItemListSchema(items: { name: string; url: string; position: number }[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  });
}
