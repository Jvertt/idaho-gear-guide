export interface Activity {
  slug: string;
  name: string;
  icon: string;
  description: string;
  gearCategories: string[];
  bestMonths: number[];
  affiliatePrograms: string[];
}

export const activities: Activity[] = [
  {
    slug: 'kayaking',
    name: 'Kayaking',
    icon: '🛶',
    description: "North Idaho's lakes and rivers offer world-class kayaking, from calm flatwater paddling on Lake Coeur d'Alene to challenging whitewater on the Clark Fork. The region's crystal-clear waters and mountain backdrops make every paddle stroke scenic.",
    gearCategories: ['kayak', 'paddle', 'pfd', 'drysuit', 'dry-bag'],
    bestMonths: [5, 6, 7, 8, 9],
    affiliatePrograms: ['avantlink', 'rei', 'backcountry'],
  },
  {
    slug: 'fishing',
    name: 'Fishing',
    icon: '🎣',
    description: "From world-record Kamloops rainbow trout in Lake Pend Oreille to wild cutthroat in mountain streams, North Idaho is a fly fishing and spin casting paradise. Steelhead runs on the Clearwater and bass fishing on the Coeur d'Alene system round out a year-round fishery.",
    gearCategories: ['fly-rod', 'spinning-rod', 'waders', 'tackle', 'net', 'vest'],
    bestMonths: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    affiliatePrograms: ['avantlink', 'simms', 'cabelas', 'amazon'],
  },
  {
    slug: 'hiking',
    name: 'Hiking',
    icon: '🥾',
    description: "Hundreds of miles of trails wind through North Idaho's mountains, forests, and lakeshores. From the family-friendly Tubbs Hill loop to multi-day backcountry treks in the Selkirk Crest, there's terrain for every skill level and every season.",
    gearCategories: ['hiking-boots', 'backpack', 'trekking-poles', 'hydration', 'navigation'],
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    affiliatePrograms: ['avantlink', 'rei', 'backcountry', 'amazon'],
  },
  {
    slug: 'skiing-snowboarding',
    name: 'Skiing & Snowboarding',
    icon: '⛷️',
    description: "Schweitzer Mountain and Silver Mountain deliver over 5,000 combined acres of skiable terrain with reliable Inland Northwest snowfall. Backcountry skiing in the Selkirks and Bitterroots adds even more options for those willing to earn their turns.",
    gearCategories: ['skis', 'snowboard', 'boots', 'helmet', 'goggles', 'avalanche-gear'],
    bestMonths: [11, 12, 1, 2, 3, 4],
    affiliatePrograms: ['avantlink', 'backcountry', 'rei'],
  },
  {
    slug: 'hunting',
    name: 'Hunting',
    icon: '🦌',
    description: "North Idaho's vast national forests and private timberlands support healthy populations of whitetail deer, elk, moose, black bear, and upland birds. The region's mix of terrain — from river bottoms to alpine basins — creates diverse hunting opportunities across multiple seasons.",
    gearCategories: ['rifle', 'optics', 'pack', 'boots', 'clothing', 'game-bags'],
    bestMonths: [9, 10, 11, 12],
    affiliatePrograms: ['avantlink', 'cabelas', 'amazon'],
  },
  {
    slug: 'paddle-boarding',
    name: 'Paddle Boarding',
    icon: '🏄',
    description: "Stand-up paddleboarding on North Idaho's calm lake waters is one of the best ways to experience the region's beauty. Glassy morning conditions on Hayden Lake, Priest Lake, and Lake Coeur d'Alene provide perfect SUP conditions from June through September.",
    gearCategories: ['sup-board', 'paddle', 'pfd', 'leash'],
    bestMonths: [6, 7, 8, 9],
    affiliatePrograms: ['avantlink', 'rei', 'amazon'],
  },
  {
    slug: 'mountain-biking',
    name: 'Mountain Biking',
    icon: '🚵',
    description: "North Idaho has quietly become a mountain biking hotspot, with lift-served trails at Schweitzer, flowy singletrack on Canfield Mountain, and epic point-to-point rides on the Route of the Hiawatha. The trail network continues to expand every season.",
    gearCategories: ['mountain-bike', 'helmet', 'gloves', 'shoes', 'hydration'],
    bestMonths: [5, 6, 7, 8, 9, 10],
    affiliatePrograms: ['avantlink', 'rei', 'backcountry'],
  },
  {
    slug: 'camping',
    name: 'Camping',
    icon: '⛺',
    description: "From developed campgrounds on the shores of Priest Lake to dispersed backcountry sites deep in the Panhandle National Forest, North Idaho offers camping for every style. Summer nights are long, stargazing is exceptional, and wildlife sightings are common.",
    gearCategories: ['tent', 'sleeping-bag', 'camp-stove', 'cooler', 'lantern'],
    bestMonths: [5, 6, 7, 8, 9, 10],
    affiliatePrograms: ['avantlink', 'rei', 'amazon', 'yeti'],
  },
  {
    slug: 'snowshoeing',
    name: 'Snowshoeing',
    icon: '❄️',
    description: "When snow blankets North Idaho's mountains, snowshoeing opens up a quiet, meditative way to explore the backcountry. Groomed trails at Schweitzer and Fourth of July Pass complement endless options for breaking trail through national forest powder.",
    gearCategories: ['snowshoes', 'poles', 'gaiters', 'layers', 'headlamp'],
    bestMonths: [12, 1, 2, 3],
    affiliatePrograms: ['avantlink', 'rei', 'backcountry'],
  },
  {
    slug: 'whitewater-rafting',
    name: 'Whitewater Rafting',
    icon: '🌊',
    description: "The Lochsa River, Moyie River, and North Fork Clearwater offer exhilarating whitewater rafting through Idaho's wildest canyons. Spring snowmelt creates Class III–IV rapids that attract paddlers from across the Pacific Northwest.",
    gearCategories: ['raft', 'helmet', 'pfd', 'drysuit', 'throw-bag'],
    bestMonths: [4, 5, 6, 7],
    affiliatePrograms: ['avantlink', 'rei', 'backcountry'],
  },
  {
    slug: 'trail-running',
    name: 'Trail Running',
    icon: '🏃',
    description: "North Idaho's trail systems provide exceptional terrain for trail running, from lakeside paths to alpine ridge routes. The Centennial Trail, Canfield Mountain trails, and Mineral Ridge loop are local favorites that combine fitness with stunning scenery.",
    gearCategories: ['trail-shoes', 'hydration-vest', 'headlamp', 'gaiters'],
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    affiliatePrograms: ['avantlink', 'rei', 'backcountry', 'amazon'],
  },
  {
    slug: 'boating-wakeboarding',
    name: 'Boating & Wakeboarding',
    icon: '🚤',
    description: "North Idaho's big lakes — Coeur d'Alene, Pend Oreille, and Priest — are made for powerboating, wakeboarding, and water skiing. Protected bays, long fetch for surfing wakes, and mountain-rimmed shorelines make every day on the water memorable.",
    gearCategories: ['wakeboard', 'life-jacket', 'tow-rope', 'tube', 'boat-accessories'],
    bestMonths: [6, 7, 8, 9],
    affiliatePrograms: ['avantlink', 'amazon', 'cabelas'],
  },
  {
    slug: 'wildlife-photography',
    name: 'Wildlife Photography',
    icon: '📸',
    description: "Moose, osprey, bald eagles, white-tailed deer, and the occasional grizzly bear — North Idaho's wildlife diversity makes it a premier destination for nature photography. Dawn and dusk along lakeshores and river corridors offer the best opportunities.",
    gearCategories: ['camera', 'telephoto-lens', 'tripod', 'blind', 'binoculars'],
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    affiliatePrograms: ['amazon', 'avantlink'],
  },
  {
    slug: 'rock-climbing',
    name: 'Rock Climbing',
    icon: '🧗',
    description: "The granite walls of the Selkirk Crest and Q'emiln Park boulders near Post Falls provide climbing options for all levels. While not as developed as some Western destinations, North Idaho's climbing scene is growing, with new routes being established each season.",
    gearCategories: ['climbing-shoes', 'harness', 'rope', 'helmet', 'quickdraws'],
    bestMonths: [5, 6, 7, 8, 9, 10],
    affiliatePrograms: ['avantlink', 'rei', 'backcountry'],
  },
];

export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find((a) => a.slug === slug);
}

export function getActivitiesForLocation(activitySlugs: string[]): Activity[] {
  return activities.filter((a) => activitySlugs.includes(a.slug));
}
