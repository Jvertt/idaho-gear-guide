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
  /** Single hero image (use `images` instead for a gallery) */
  image?: string;
  /** Multiple images — scroll gallery on the product card */
  images?: string[];
  /**
   * Set to `false` when the SKU is discontinued or not sold by our linked retailers.
   * Hides the product from picks, comparisons, and alternatives; review pages stay up with a notice.
   */
  available?: boolean;
  /**
   * When there is no matching row in `products.ts`, these lines power ProductCard (max 3 shown).
   * Use short, Idaho-relevant benefits for SEO and skimmability.
   */
  listingHighlights?: string[];
}

const TAG = ACTIVE_PROGRAMS.amazon.tag;

/** Direct product page — associate tag appended in `ensureAmazonTag` */
function amazonDp(asin: string): string {
  return `https://www.amazon.com/dp/${asin}`;
}

/** Amazon search with associate tag — use when a direct product link is not appropriate */
export function amazonSearchUrl(productName: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(productName)}&tag=${TAG}`;
}

export function isAffiliateAvailable(affiliate: AffiliateLink | undefined): boolean {
  return affiliate != null && affiliate.available !== false;
}

export function filterAvailableAffiliateIds(ids: string[]): string[] {
  return ids.filter((id) => {
    const a = affiliateLinks.find((x) => x.id === id);
    return isAffiliateAvailable(a);
  });
}

export const affiliateLinks: AffiliateLink[] = [
  // Coolers
  {
    id: 'yeti-tundra-45',
    productName: 'YETI Tundra 45 Hard Cooler',
    program: 'amazon',
    url: amazonDp('B001COUOYK'),
    price: 325,
    priceRange: 'premium',
    category: 'cooler',
    commissionRate: 0.04,
    cookieDays: 1,
    images: [
      '/images/products/yeti-tundra-45-1.png',
      '/images/products/yeti-tundra-45-2.png',
      '/images/products/yeti-tundra-45-3.png',
    ],
  },
  {
    id: 'rtic-45-cooler',
    productName: 'RTIC 45 QT Hard Cooler',
    program: 'amazon',
    url: amazonDp('B01M1OJO3B'),
    price: 200,
    priceRange: 'mid',
    category: 'cooler',
    commissionRate: 0.04,
    cookieDays: 1,
    images: [
      '/images/products/rtic-45-cooler-1.png',
      '/images/products/rtic-45-cooler-2.png',
      '/images/products/rtic-45-cooler-3.png',
    ],
  },
  {
    id: 'coleman-xtreme-52qt',
    productName: 'Coleman 52-Quart Xtreme Cooler',
    program: 'amazon',
    url: amazonDp('B07XMMB6SG'),
    price: 50,
    priceRange: 'budget',
    category: 'cooler',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/coleman-xtreme-52qt.jpg',
  },
  // Kayaks
  {
    id: 'perception-pescador-12',
    productName: 'Perception Pescador Pro 12.0',
    program: 'amazon',
    url: amazonDp('B07WQ5NH2Q'),
    price: 950,
    priceRange: 'mid',
    category: 'kayak',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/perception-pescador-12.jpg',
  },
  {
    id: 'wilderness-systems-pungo-125',
    productName: 'Wilderness Systems Pungo 125',
    program: 'amazon',
    url: amazonDp('B0CZCMWTKZ'),
    price: 1100,
    priceRange: 'premium',
    category: 'kayak',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/wilderness-systems-pungo-125.jpg',
  },
  {
    id: 'pelican-mustang-100x',
    productName: 'Pelican Mustang 100X',
    program: 'amazon',
    // No stable single-ASIN listing for this model — replace with /dp/ASIN when you have one
    url: amazonSearchUrl('Pelican Mustang 100X Kayak'),
    price: 350,
    priceRange: 'budget',
    category: 'kayak',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/pelican-mustang-100x.jpg',
  },
  {
    id: 'intex-explorer-k2',
    productName: 'Intex Explorer K2 Inflatable Kayak',
    program: 'amazon',
    url: amazonDp('B00A7EXF4C'),
    price: 120,
    priceRange: 'budget',
    category: 'kayak',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/intex-explorer-k2.jpg',
  },
  // Fishing
  {
    id: 'orvis-clearwater-fly-rod',
    productName: 'Orvis Clearwater 5-Weight Fly Rod',
    program: 'amazon',
    // Outfit listing (rod + reel + line); swap ASIN for rod-only if preferred
    url: amazonDp('B07SQ455Y4'),
    price: 250,
    priceRange: 'mid',
    category: 'fly-rod',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/orvis-clearwater-fly-rod.jpg',
    available: false,
  },
  {
    id: 'redington-classic-trout',
    productName: 'Redington Classic Trout Fly Rod',
    program: 'amazon',
    url: amazonDp('B00HZ7B6ZO'),
    price: 150,
    priceRange: 'budget',
    category: 'fly-rod',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/redington-classic-trout.jpg',
  },
  {
    id: 'sage-foundation-fly-rod',
    productName: 'Sage Foundation Fly Rod',
    program: 'amazon',
    // Sage rod-only listings vary; replace with /dp/ASIN when you pick a specific SKU
    url: amazonSearchUrl('Sage Foundation Fly Rod'),
    price: 450,
    priceRange: 'premium',
    category: 'fly-rod',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/sage-foundation-fly-rod.jpg',
  },
  {
    id: 'shimano-sedona-spinning',
    productName: 'Shimano Sedona FI Spinning Combo',
    program: 'amazon',
    // Reel listing; swap for a Sedona+rod combo ASIN if you standardize on one package
    url: amazonDp('B08VZJRWPS'),
    price: 110,
    priceRange: 'budget',
    category: 'spinning-rod',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/shimano-sedona-spinning.jpg',
  },
  {
    id: 'st-croix-triumph-spinning',
    productName: 'St. Croix Triumph Spinning Rod',
    program: 'amazon',
    url: amazonDp('B08KGV5DYT'),
    price: 200,
    priceRange: 'mid',
    category: 'spinning-rod',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/st-croix-triumph-spinning.jpg',
  },
  // Waders
  {
    id: 'simms-freestone-waders',
    productName: 'Simms Freestone Stockingfoot Waders',
    program: 'amazon',
    url: amazonDp('B0DT5MG7FC'),
    price: 300,
    priceRange: 'mid',
    category: 'waders',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/simms-freestone-waders.jpg',
  },
  {
    id: 'simms-g3-guide-waders',
    productName: 'Simms G3 Guide Stockingfoot Waders',
    program: 'amazon',
    url: amazonDp('B0BCBNQ4XD'),
    price: 550,
    priceRange: 'premium',
    category: 'waders',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/simms-g3-guide-waders.jpg',
  },
  {
    id: 'frogg-toggs-canyon-ii',
    productName: 'Frogg Toggs Canyon II Breathable Waders',
    program: 'amazon',
    url: amazonDp('B07FKR2178'),
    price: 100,
    priceRange: 'budget',
    category: 'waders',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/frogg-toggs-canyon-ii.jpg',
  },
  // Hiking boots
  {
    id: 'salomon-x-ultra-4-gtx',
    productName: 'Salomon X Ultra 4 Mid GTX',
    program: 'amazon',
    url: amazonDp('B0B6VRR8NM'),
    price: 175,
    priceRange: 'mid',
    category: 'hiking-boots',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/salomon-x-ultra-4-gtx.jpg',
  },
  {
    id: 'merrell-moab-3-mid-wp',
    productName: 'Merrell Moab 3 Mid Waterproof',
    program: 'amazon',
    url: amazonDp('B0987VSDCT'),
    price: 145,
    priceRange: 'budget',
    category: 'hiking-boots',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/merrell-moab-3-mid-wp.jpg',
  },
  {
    id: 'lowa-renegade-gtx-mid',
    productName: 'Lowa Renegade GTX Mid',
    program: 'amazon',
    url: amazonDp('B005HUYU72'),
    price: 265,
    priceRange: 'premium',
    category: 'hiking-boots',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/lowa-renegade-gtx-mid.jpg',
  },
  // Backpacks
  {
    id: 'osprey-atmos-50',
    productName: 'Osprey Atmos AG 50',
    program: 'amazon',
    url: amazonDp('B09JXNPRB7'),
    price: 260,
    priceRange: 'mid',
    category: 'backpack',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/osprey-atmos-50.jpg',
  },
  {
    id: 'gregory-baltoro-65',
    productName: 'Gregory Baltoro 65',
    program: 'amazon',
    url: amazonDp('B073P2427N'),
    price: 330,
    priceRange: 'premium',
    category: 'backpack',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/gregory-baltoro-65.jpg',
  },
  {
    id: 'deuter-trail-30',
    productName: 'Deuter Trail 30 Daypack',
    program: 'amazon',
    url: amazonDp('B08995CV8Z'),
    price: 90,
    priceRange: 'budget',
    category: 'backpack',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/deuter-trail-30.jpg',
  },
  // Ski gear
  {
    id: 'rossignol-experience-82',
    productName: 'Rossignol Experience 82 Basalt Skis',
    program: 'amazon',
    url: amazonDp('B0CF7SP46H'),
    price: 500,
    priceRange: 'mid',
    category: 'skis',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/rossignol-experience-82.jpg',
  },
  {
    id: 'volkl-blaze-94',
    productName: 'Völkl Blaze 94 Skis',
    program: 'amazon',
    url: amazonDp('B0CLN47DJX'),
    price: 650,
    priceRange: 'premium',
    category: 'skis',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/volkl-blaze-94.jpg',
  },
  {
    id: 'smith-vantage-mips',
    productName: 'Smith Vantage MIPS Helmet',
    program: 'amazon',
    url: amazonDp('B097FDM2YP'),
    price: 260,
    priceRange: 'premium',
    category: 'ski-helmet',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/smith-vantage-mips.jpg',
  },
  // Camping gear
  {
    id: 'big-agnes-copper-spur-hv-ul2',
    productName: 'Big Agnes Copper Spur HV UL2 Tent',
    program: 'amazon',
    url: amazonDp('B08175ZK2S'),
    price: 450,
    priceRange: 'premium',
    category: 'tent',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/big-agnes-copper-spur-hv-ul2.jpg',
  },
  {
    id: 'kelty-late-start-2',
    productName: 'Kelty Late Start 2 Tent',
    program: 'amazon',
    url: amazonDp('B0CVLMNPP4'),
    price: 100,
    priceRange: 'budget',
    category: 'tent',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/kelty-late-start-2.jpg',
  },
  {
    id: 'kelty-cosmic-20',
    productName: 'Kelty Cosmic 20 Sleeping Bag',
    program: 'amazon',
    url: amazonDp('B0CV85BS12'),
    price: 100,
    priceRange: 'budget',
    category: 'sleeping-bag',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/kelty-cosmic-20.jpg',
  },
  {
    id: 'western-mountaineering-alpinlite',
    productName: 'Western Mountaineering AlpinLite Sleeping Bag',
    program: 'amazon',
    url: amazonDp('B015I5TTLW'),
    price: 530,
    priceRange: 'premium',
    category: 'sleeping-bag',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/western-mountaineering-alpinlite.jpg',
  },
  // Trekking poles
  {
    id: 'black-diamond-distance-z',
    productName: 'Black Diamond Distance Z Trekking Poles',
    program: 'amazon',
    url: amazonDp('B0GHSGGKNB'),
    price: 120,
    priceRange: 'mid',
    category: 'trekking-poles',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/black-diamond-distance-z.jpg',
  },
  {
    id: 'leki-makalu-fx-carbon',
    productName: 'LEKI Makalu FX Carbon Trekking Poles',
    program: 'amazon',
    url: amazonDp('B09SP95266'),
    price: 200,
    priceRange: 'premium',
    category: 'trekking-poles',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/leki-makalu-fx-carbon.jpg',
  },
  {
    id: 'cascade-mountain-tech-carbon',
    productName: 'Cascade Mountain Tech Carbon Fiber Trekking Poles',
    program: 'amazon',
    url: amazonDp('B096XDQFDM'),
    price: 40,
    priceRange: 'budget',
    category: 'trekking-poles',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/cascade-mountain-tech-carbon.jpg',
  },
  // SUP
  {
    id: 'irocker-cruiser-106',
    productName: "iROCKER Cruiser 10'6\" Inflatable SUP",
    program: 'amazon',
    // iROCKER 10'6" all-around; swap ASIN if you standardize on a different Cruiser SKU/year
    url: amazonDp('B0C795G2M3'),
    price: 525,
    priceRange: 'mid',
    category: 'sup-board',
    commissionRate: 0.04,
    cookieDays: 1,
    image: '/images/products/irocker-cruiser-106.jpg',
  },
  // --- More Amazon picks (no full review in products.ts — use PA-API fetch-images or listingHighlights for card images)
  {
    id: 'hydro-flask-32-wide-chug',
    productName: 'Hydro Flask 32 oz Wide Mouth (Flex Chug Cap)',
    program: 'amazon',
    url: amazonDp('B0CBD2YMGM'),
    price: 45,
    priceRange: 'mid',
    category: 'hydration',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      'Vacuum insulation keeps drinks cold on hot trail days in the Panhandle',
      'Wide mouth fits ice — great for summer lake and river trips',
      '18/8 stainless steel; durable enough for daily Idaho adventures',
    ],
  },
  {
    id: 'nalgene-sustain-32',
    productName: 'Nalgene Sustain 32 oz Wide Mouth',
    program: 'amazon',
    url: amazonDp('B0B9T4KCV7'),
    price: 17,
    priceRange: 'budget',
    category: 'hydration',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      'Lightweight, leak-proof classic for hiking and car camping',
      'BPA/BPS-free Tritan — easy to clean after trail days',
      'Made in USA; budget-friendly backup bottle for any kit',
    ],
  },
  {
    id: 'sawyer-squeeze-filter',
    productName: 'Sawyer Squeeze Water Filtration System',
    program: 'amazon',
    url: amazonDp('B00B1OSU4W'),
    price: 40,
    priceRange: 'mid',
    category: 'water-filter',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      'Field-ready filtration for backcountry streams and alpine lakes',
      'Compact kit for multi-day Selkirk and Forest Service trips',
      'Trusted by backpackers when Idaho sources are questionable',
    ],
  },
  {
    id: 'msr-pocketrocket-2',
    productName: 'MSR PocketRocket 2 Stove',
    program: 'amazon',
    url: amazonDp('B07BN143Z5'),
    price: 50,
    priceRange: 'mid',
    category: 'camp-stove',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      'Ultralight canister stove for fast boils at high-elevation camps',
      'Tiny packed size — ideal for minimalist overnight packs',
      'Simmer control for real cooking, not just water',
    ],
  },
  {
    id: 'jetboil-flash',
    productName: 'Jetboil Flash Cooking System',
    program: 'amazon',
    url: amazonDp('B07N1SNHJJ'),
    price: 130,
    priceRange: 'premium',
    category: 'camp-stove',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      'All-in-one stove + cup for quick meals on cold North Idaho mornings',
      'Fast boil times save fuel on windy ridge camps',
      'Integrated design cuts weight vs separate pot + burner',
    ],
  },
  {
    id: 'black-diamond-spot-400',
    productName: 'Black Diamond Spot 400 Headlamp',
    program: 'amazon',
    url: amazonDp('B0DK2QZYKG'),
    price: 55,
    priceRange: 'mid',
    category: 'headlamp',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      'Bright beam for pre-dawn trailheads and winter short days',
      'Red mode preserves night vision on early-season elk scouting',
      'Weather-sealed for Panhandle rain and snow',
    ],
  },
  {
    id: 'thermarest-z-lite-sol',
    productName: 'Therm-a-Rest Z Lite Sol Sleeping Pad',
    program: 'amazon',
    url: amazonDp('B005I6T0S4'),
    price: 55,
    priceRange: 'mid',
    category: 'sleeping-pad',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      'Closed-cell foam — no punctures on rocky Idaho campsites',
      'Foldable panels strap to the outside of a pack',
      'Reliable R-value boost for shoulder-season nights',
    ],
  },
  {
    id: 'sea-to-summit-ultra-sil-8l',
    productName: 'Sea to Summit Ultra-Sil Dry Sack 8L',
    program: 'amazon',
    url: amazonDp('B006WKH6IC'),
    price: 22,
    priceRange: 'budget',
    category: 'dry-bag',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      'Keeps clothing and electronics dry in wet boats and sudden storms',
      'Ultralight — easy to toss in a kayak or daypack',
      'Roll-top seal for river floats and lake paddles',
    ],
  },
  {
    id: 'onyx-movevent-pfd',
    productName: 'Onyx MoveVent Dynamic Paddle Sports Life Vest',
    program: 'amazon',
    url: amazonDp('B000WMEYEM'),
    price: 55,
    priceRange: 'mid',
    category: 'pfd',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      'Ventilated design for long paddles on Pend Oreille and Priest Lake',
      'High-back fit works with kayak seats',
      'USCG Type III — appropriate for calm inland waters with PFD rules',
    ],
  },
  {
    id: 'leatherman-wave-plus',
    productName: 'Leatherman Wave Plus Multi-Tool',
    program: 'amazon',
    url: amazonDp('B005DI0XM4'),
    price: 120,
    priceRange: 'premium',
    category: 'multitool',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      'Pliers, blades, and drivers for camp repairs and trail fixes',
      'One-handed opening tools when your other hand is full',
      'Stainless build survives wet, gritty Idaho conditions',
    ],
  },
  {
    id: 'kahtoola-microspikes',
    productName: 'Kahtoola MICROspikes Traction System',
    program: 'amazon',
    url: amazonDp('B002HMTJ6K'),
    price: 75,
    priceRange: 'mid',
    category: 'traction-aids',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      'Grip on packed snow and ice on Schweitzer approaches and forest roads',
      'Fits over most hiking boots — no crampon experience required',
      'Packable insurance for early-spring and late-fall hikes',
    ],
  },
  {
    id: 'ursack-major',
    productName: 'Ursack Major Bear-Resistant Food Sack',
    program: 'amazon',
    url: amazonDp('B00427VTMA'),
    price: 120,
    priceRange: 'premium',
    category: 'bear-safety',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      'Soft-sided bear-resistant storage where canisters are awkward to pack',
      'Pairs with odor-proof ops bags for Panhandle bear country',
      'Lighter than hard cans for long approaches',
    ],
  },
  {
    id: 'smartwool-hike-light-crew',
    productName: 'Smartwool Hike Light Crew Socks',
    program: 'amazon',
    url: amazonDp('B002M2TVTW'),
    price: 24,
    priceRange: 'budget',
    category: 'hiking-socks',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      'Merino blend manages moisture on long North Idaho trail days',
      'Cushioning where boots rub on steep Selkirk descents',
      'Odor-resistant for multi-day trips without laundry',
    ],
  },
  {
    id: 'platypus-big-zip-3l',
    productName: 'Platypus Big Zip EVO Reservoir 3L',
    program: 'amazon',
    url: amazonDp('B000B7LNN8'),
    price: 42,
    priceRange: 'mid',
    category: 'hydration-reservoir',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      'Hands-free drinking on long hikes without stopping',
      'Slides into most backpacking hydration sleeves',
      'Wide opening for faster refills at alpine sources (treat water separately)',
    ],
  },
  {
    id: 'vortex-crossfire-hd-10x42',
    productName: 'Vortex Optics Crossfire HD 10x42 Binoculars',
    program: 'amazon',
    url: amazonDp('B07N8XHTX7'),
    price: 180,
    priceRange: 'mid',
    category: 'optics',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      '10×42 for wildlife, scouting terrain, and lake viewing across big water',
      'Rubber-armored chassis handles cold, wet Panhandle mornings',
      'Vortex VIP warranty — strong value for serious field use',
    ],
  },
  {
    id: 'garmin-etrex-se',
    productName: 'Garmin eTrex SE GPS Handheld',
    program: 'amazon',
    // Replace with /dp/ASIN when you standardize on a US listing (bundles vary)
    url: amazonSearchUrl('Garmin eTrex SE GPS'),
    price: 150,
    priceRange: 'mid',
    category: 'gps-handheld',
    commissionRate: 0.04,
    cookieDays: 1,
    listingHighlights: [
      'Satellite GPS when phone service dies in national forest drainages',
      'Rugged build for off-trail navigation and winter wayfinding',
      'Long battery life for multi-day Selkirk routes',
    ],
  },
];

export function getAffiliateById(id: string): AffiliateLink | undefined {
  return affiliateLinks.find((a) => a.id === id);
}

export function getAffiliatesByCategory(category: string): AffiliateLink[] {
  return affiliateLinks.filter((a) => a.category === category && isAffiliateAvailable(a));
}

export function getAffiliatesByPriceRange(range: 'budget' | 'mid' | 'premium'): AffiliateLink[] {
  return affiliateLinks.filter((a) => a.priceRange === range && isAffiliateAvailable(a));
}
