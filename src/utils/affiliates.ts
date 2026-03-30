import {
  affiliateLinks,
  ACTIVE_PROGRAMS,
  isAffiliateAvailable,
  filterAvailableAffiliateIds,
  amazonSearchUrl,
} from '../data/affiliates';
import type { AffiliateLink } from '../data/affiliates';

export { isAffiliateAvailable, filterAvailableAffiliateIds, amazonSearchUrl };

// TODO: Re-enable internal cloaking via /go/[id] when multi-program support returns
// For now all links go directly to Amazon with the associate tag
export function getCloakedUrl(affiliateId: string): string {
  const affiliate = affiliateLinks.find((a) => a.id === affiliateId);
  if (!affiliate) return '#';
  return ensureAmazonTag(affiliate.url);
}

export function getAffiliateLink(affiliateId: string): AffiliateLink | undefined {
  return affiliateLinks.find((a) => a.id === affiliateId);
}

export function ensureAmazonTag(url: string): string {
  if (url.includes('tag=')) return url;
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}tag=${ACTIVE_PROGRAMS.amazon.tag}`;
}

export function trackClick(affiliateId: string): void {
  if (typeof window !== 'undefined') {
    console.log(`[affiliate-click] ${affiliateId} — ${new Date().toISOString()}`);
  }
}

export function formatPrice(price: number): string {
  return `$${price.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
}

export function getPriceRangeLabel(range: 'budget' | 'mid' | 'premium'): string {
  const labels = {
    budget: 'Budget Pick',
    mid: 'Best Value',
    premium: 'Premium Choice',
  };
  return labels[range];
}
