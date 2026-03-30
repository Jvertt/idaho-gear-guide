import type { Location } from '../data/locations';
import type { Activity } from '../data/activities';

export interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  ogType: string;
  twitterCard: string;
}

const SITE_URL = 'https://idahogearguide.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

export function generateActivityPageSEO(
  location: Location,
  activity: Activity,
  year: number = new Date().getFullYear()
): SEOMeta {
  const title = truncate(`Best ${activity.name} Gear for ${location.name} (${year})`, 60);
  const description = truncate(
    `Top-rated ${activity.name.toLowerCase()} gear picks for ${location.name}, Idaho. Expert recommendations for ${activity.gearCategories.slice(0, 3).join(', ')} tested in North Idaho conditions.`,
    160
  );
  const url = `${SITE_URL}/${location.slug}/${activity.slug}`;

  return {
    title,
    description,
    canonical: url,
    ogTitle: title,
    ogDescription: description,
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: url,
    ogType: 'article',
    twitterCard: 'summary_large_image',
  };
}

export function generateReviewSEO(product: {
  productName: string;
  category: string;
  affiliateId: string;
}): SEOMeta {
  const year = new Date().getFullYear();
  const title = truncate(`${product.productName} Review (${year}) — Idaho Gear Guide`, 60);
  const description = truncate(
    `In-depth review of the ${product.productName}. Tested in North Idaho's backcountry. Honest pros, cons, specs, and our verdict for Idaho outdoor enthusiasts.`,
    160
  );
  const url = `${SITE_URL}/reviews/${product.affiliateId}`;

  return {
    title,
    description,
    canonical: url,
    ogTitle: title,
    ogDescription: description,
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: url,
    ogType: 'article',
    twitterCard: 'summary_large_image',
  };
}

export function generateLocationSEO(location: Location): SEOMeta {
  const title = truncate(`Outdoor Gear Guide for ${location.name}, Idaho`, 60);
  const description = truncate(
    `${location.description} Find the best gear for ${location.activities.length} outdoor activities at ${location.name}.`,
    160
  );
  const url = `${SITE_URL}/${location.slug}`;

  return {
    title,
    description,
    canonical: url,
    ogTitle: title,
    ogDescription: description,
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: url,
    ogType: 'website',
    twitterCard: 'summary_large_image',
  };
}

export function generateCompareSEO(title: string, slug: string, description: string): SEOMeta {
  const year = new Date().getFullYear();
  const seoTitle = truncate(`${title} (${year}) — Idaho Gear Guide`, 60);
  const url = `${SITE_URL}/compare/${slug}`;

  return {
    title: seoTitle,
    description: truncate(description, 160),
    canonical: url,
    ogTitle: seoTitle,
    ogDescription: truncate(description, 160),
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: url,
    ogType: 'article',
    twitterCard: 'summary_large_image',
  };
}

export function generateGuideSEO(title: string, slug: string, description: string): SEOMeta {
  const year = new Date().getFullYear();
  const seoTitle = truncate(`${title} (${year}) — Idaho Gear Guide`, 60);
  const url = `${SITE_URL}/guides/${slug}`;

  return {
    title: seoTitle,
    description: truncate(description, 160),
    canonical: url,
    ogTitle: seoTitle,
    ogDescription: truncate(description, 160),
    ogImage: DEFAULT_OG_IMAGE,
    ogUrl: url,
    ogType: 'article',
    twitterCard: 'summary_large_image',
  };
}

function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max - 3).trimEnd() + '...';
}
