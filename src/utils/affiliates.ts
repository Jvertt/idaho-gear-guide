import { affiliateLinks } from '../data/affiliates';
import type { AffiliateLink } from '../data/affiliates';

export function getCloakedUrl(affiliateId: string): string {
  return `/go/${affiliateId}`;
}

export function getAffiliateLink(affiliateId: string): AffiliateLink | undefined {
  return affiliateLinks.find((a) => a.id === affiliateId);
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
