// MONETIZATION: Amazon Associates only (tag: idahogear-20)
// Upgrade path: swap program + url per product as AvantLink/REI/Simms approve us
// Skimlinks fallback script added in BaseLayout.astro for any missed links

export const ACTIVE_PROGRAMS = {
  amazon: {
    name: 'Amazon Associates',
    tag: 'idahogear-20',
    commissionRate: 0.04,
    cookieDays: 1,
    approvalStatus: 'approved',
    upgradeNote: 'Replace with AvantLink at 20+ pages. Replace YETI/Simms when traffic hits 1k/mo sessions.',
  },
  skimlinks: {
    name: 'Skimlinks',
    pubId: '1234567X',
    approvalStatus: 'pending_signup',
    note: 'Fallback for any untagged links',
  },
} as const;

export type AffiliateProgram = 'amazon';

export interface AffiliateLink {
  id: string;
  productName: string;
  program: AffiliateProgram;
  url: string;
  price: number;
  priceRange: 'budget' | 'mid' | 'premium';
  category: string;
  commissionRate: number;
  cookieDays: number;
}

const TAG = ACTIVE_PROGRAMS.amazon.tag;

function amazonSearchUrl(productName: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(productName)}&tag=${TAG}`;
}

export const affiliateLinks: AffiliateLink[] = [
  // Coolers
  {
    id: 'yeti-tundra-45',
    productName: 'YETI Tundra 45 Hard Cooler',
    program: 'amazon',
    url: amazonSearchUrl('YETI Tundra 45 Hard Cooler'),
    price: 325,
    priceRange: 'premium',
    category: 'cooler',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'rtic-45-cooler',
    productName: 'RTIC 45 QT Hard Cooler',
    program: 'amazon',
    url: amazonSearchUrl('RTIC 45 QT Hard Cooler'),
    price: 200,
    priceRange: 'mid',
    category: 'cooler',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'coleman-xtreme-52qt',
    productName: 'Coleman 52-Quart Xtreme Cooler',
    program: 'amazon',
    url: amazonSearchUrl('Coleman 52-Quart Xtreme Cooler'),
    price: 50,
    priceRange: 'budget',
    category: 'cooler',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  // Kayaks
  {
    id: 'perception-pescador-12',
    productName: 'Perception Pescador Pro 12.0',
    program: 'amazon',
    url: amazonSearchUrl('Perception Pescador Pro 12'),
    price: 950,
    priceRange: 'mid',
    category: 'kayak',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'wilderness-systems-pungo-125',
    productName: 'Wilderness Systems Pungo 125',
    program: 'amazon',
    url: amazonSearchUrl('Wilderness Systems Pungo 125'),
    price: 1100,
    priceRange: 'premium',
    category: 'kayak',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'pelican-mustang-100x',
    productName: 'Pelican Mustang 100X',
    program: 'amazon',
    url: amazonSearchUrl('Pelican Mustang 100X Kayak'),
    price: 350,
    priceRange: 'budget',
    category: 'kayak',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'intex-explorer-k2',
    productName: 'Intex Explorer K2 Inflatable Kayak',
    program: 'amazon',
    url: amazonSearchUrl('Intex Explorer K2 Inflatable Kayak'),
    price: 120,
    priceRange: 'budget',
    category: 'kayak',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  // Fishing
  {
    id: 'orvis-clearwater-fly-rod',
    productName: 'Orvis Clearwater 5-Weight Fly Rod',
    program: 'amazon',
    url: amazonSearchUrl('Orvis Clearwater 5-Weight Fly Rod'),
    price: 250,
    priceRange: 'mid',
    category: 'fly-rod',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'redington-classic-trout',
    productName: 'Redington Classic Trout Fly Rod',
    program: 'amazon',
    url: amazonSearchUrl('Redington Classic Trout Fly Rod'),
    price: 150,
    priceRange: 'budget',
    category: 'fly-rod',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'sage-foundation-fly-rod',
    productName: 'Sage Foundation Fly Rod',
    program: 'amazon',
    url: amazonSearchUrl('Sage Foundation Fly Rod'),
    price: 450,
    priceRange: 'premium',
    category: 'fly-rod',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'shimano-sedona-spinning',
    productName: 'Shimano Sedona FI Spinning Combo',
    program: 'amazon',
    url: amazonSearchUrl('Shimano Sedona FI Spinning Combo'),
    price: 110,
    priceRange: 'budget',
    category: 'spinning-rod',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'st-croix-triumph-spinning',
    productName: 'St. Croix Triumph Spinning Rod',
    program: 'amazon',
    url: amazonSearchUrl('St. Croix Triumph Spinning Rod'),
    price: 200,
    priceRange: 'mid',
    category: 'spinning-rod',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  // Waders
  {
    id: 'simms-freestone-waders',
    productName: 'Simms Freestone Stockingfoot Waders',
    program: 'amazon',
    url: amazonSearchUrl('Simms Freestone Stockingfoot Waders'),
    price: 300,
    priceRange: 'mid',
    category: 'waders',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'simms-g3-guide-waders',
    productName: 'Simms G3 Guide Stockingfoot Waders',
    program: 'amazon',
    url: amazonSearchUrl('Simms G3 Guide Stockingfoot Waders'),
    price: 550,
    priceRange: 'premium',
    category: 'waders',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'frogg-toggs-canyon-ii',
    productName: 'Frogg Toggs Canyon II Breathable Waders',
    program: 'amazon',
    url: amazonSearchUrl('Frogg Toggs Canyon II Breathable Waders'),
    price: 100,
    priceRange: 'budget',
    category: 'waders',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  // Hiking boots
  {
    id: 'salomon-x-ultra-4-gtx',
    productName: 'Salomon X Ultra 4 Mid GTX',
    program: 'amazon',
    url: amazonSearchUrl('Salomon X Ultra 4 Mid GTX'),
    price: 175,
    priceRange: 'mid',
    category: 'hiking-boots',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'merrell-moab-3-mid-wp',
    productName: 'Merrell Moab 3 Mid Waterproof',
    program: 'amazon',
    url: amazonSearchUrl('Merrell Moab 3 Mid Waterproof'),
    price: 145,
    priceRange: 'budget',
    category: 'hiking-boots',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'lowa-renegade-gtx-mid',
    productName: 'Lowa Renegade GTX Mid',
    program: 'amazon',
    url: amazonSearchUrl('Lowa Renegade GTX Mid'),
    price: 265,
    priceRange: 'premium',
    category: 'hiking-boots',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  // Backpacks
  {
    id: 'osprey-atmos-50',
    productName: 'Osprey Atmos AG 50',
    program: 'amazon',
    url: amazonSearchUrl('Osprey Atmos AG 50'),
    price: 260,
    priceRange: 'mid',
    category: 'backpack',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'gregory-baltoro-65',
    productName: 'Gregory Baltoro 65',
    program: 'amazon',
    url: amazonSearchUrl('Gregory Baltoro 65'),
    price: 330,
    priceRange: 'premium',
    category: 'backpack',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'deuter-trail-30',
    productName: 'Deuter Trail 30 Daypack',
    program: 'amazon',
    url: amazonSearchUrl('Deuter Trail 30 Daypack'),
    price: 90,
    priceRange: 'budget',
    category: 'backpack',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  // Ski gear
  {
    id: 'rossignol-experience-82',
    productName: 'Rossignol Experience 82 Basalt Skis',
    program: 'amazon',
    url: amazonSearchUrl('Rossignol Experience 82 Basalt Skis'),
    price: 500,
    priceRange: 'mid',
    category: 'skis',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'volkl-blaze-94',
    productName: 'Völkl Blaze 94 Skis',
    program: 'amazon',
    url: amazonSearchUrl('Volkl Blaze 94 Skis'),
    price: 650,
    priceRange: 'premium',
    category: 'skis',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'smith-vantage-mips',
    productName: 'Smith Vantage MIPS Helmet',
    program: 'amazon',
    url: amazonSearchUrl('Smith Vantage MIPS Helmet'),
    price: 260,
    priceRange: 'premium',
    category: 'ski-helmet',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  // Camping gear
  {
    id: 'big-agnes-copper-spur-hv-ul2',
    productName: 'Big Agnes Copper Spur HV UL2 Tent',
    program: 'amazon',
    url: amazonSearchUrl('Big Agnes Copper Spur HV UL2 Tent'),
    price: 450,
    priceRange: 'premium',
    category: 'tent',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'kelty-late-start-2',
    productName: 'Kelty Late Start 2 Tent',
    program: 'amazon',
    url: amazonSearchUrl('Kelty Late Start 2 Tent'),
    price: 100,
    priceRange: 'budget',
    category: 'tent',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'kelty-cosmic-20',
    productName: 'Kelty Cosmic 20 Sleeping Bag',
    program: 'amazon',
    url: amazonSearchUrl('Kelty Cosmic 20 Sleeping Bag'),
    price: 100,
    priceRange: 'budget',
    category: 'sleeping-bag',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'western-mountaineering-alpinlite',
    productName: 'Western Mountaineering AlpinLite Sleeping Bag',
    program: 'amazon',
    url: amazonSearchUrl('Western Mountaineering AlpinLite Sleeping Bag'),
    price: 530,
    priceRange: 'premium',
    category: 'sleeping-bag',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  // Trekking poles
  {
    id: 'black-diamond-distance-z',
    productName: 'Black Diamond Distance Z Trekking Poles',
    program: 'amazon',
    url: amazonSearchUrl('Black Diamond Distance Z Trekking Poles'),
    price: 120,
    priceRange: 'mid',
    category: 'trekking-poles',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'leki-makalu-fx-carbon',
    productName: 'LEKI Makalu FX Carbon Trekking Poles',
    program: 'amazon',
    url: amazonSearchUrl('LEKI Makalu FX Carbon Trekking Poles'),
    price: 200,
    priceRange: 'premium',
    category: 'trekking-poles',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  {
    id: 'cascade-mountain-tech-carbon',
    productName: 'Cascade Mountain Tech Carbon Fiber Trekking Poles',
    program: 'amazon',
    url: amazonSearchUrl('Cascade Mountain Tech Carbon Fiber Trekking Poles'),
    price: 40,
    priceRange: 'budget',
    category: 'trekking-poles',
    commissionRate: 0.04,
    cookieDays: 1,
  },
  // SUP
  {
    id: 'irocker-cruiser-106',
    productName: "iROCKER Cruiser 10'6\" Inflatable SUP",
    program: 'amazon',
    url: amazonSearchUrl('iROCKER Cruiser 10.6 Inflatable SUP'),
    price: 525,
    priceRange: 'mid',
    category: 'sup-board',
    commissionRate: 0.04,
    cookieDays: 1,
  },
];

export function getAffiliateById(id: string): AffiliateLink | undefined {
  return affiliateLinks.find((a) => a.id === id);
}

export function getAffiliatesByCategory(category: string): AffiliateLink[] {
  return affiliateLinks.filter((a) => a.category === category);
}

export function getAffiliatesByPriceRange(range: 'budget' | 'mid' | 'premium'): AffiliateLink[] {
  return affiliateLinks.filter((a) => a.priceRange === range);
}
