export type Season = 'spring' | 'summer' | 'fall' | 'winter';

export interface LocationImage {
  url: string;
  alt: string;
  credit: string;
  creditUrl: string;
}

export interface Location {
  slug: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  description: string;
  highlights: string[];
  bestSeason: Season[];
  nearestCity: string;
  activities: string[];
  image: LocationImage;
}

export const locations: Location[] = [
  {
    slug: 'coeur-dalene',
    name: "Coeur d'Alene",
    region: 'North Idaho Panhandle',
    lat: 47.6777,
    lng: -116.7805,
    description: "Coeur d'Alene sits on the shore of one of the most beautiful lakes in the American West. With 135 miles of shoreline, world-class fishing, and the iconic Tubbs Hill trail system right downtown, it's the outdoor hub of North Idaho.",
    highlights: [
      'Tubbs Hill Nature Preserve — 120 acres of lakeside trails',
      'Lake Coeur d\'Alene — 25 miles long with pristine waters',
      'Centennial Trail — 23-mile paved path to Post Falls',
      'Silver Valley ski areas within a 45-minute drive',
    ],
    bestSeason: ['summer', 'fall'],
    nearestCity: 'Spokane, WA',
    activities: ['kayaking', 'fishing', 'hiking', 'paddle-boarding', 'mountain-biking', 'camping', 'trail-running', 'boating-wakeboarding', 'wildlife-photography'],
    image: {
      url: 'https://images.unsplash.com/photo-1570570626315-95c19358f053?w=1400&h=600&fit=crop&auto=format',
      alt: "Lake Coeur d'Alene shoreline with downtown buildings and blue water",
      credit: 'Jason Buscema',
      creditUrl: 'https://unsplash.com/@buscemaphotography',
    },
  },
  {
    slug: 'sandpoint',
    name: 'Sandpoint',
    region: 'North Idaho Panhandle',
    lat: 48.2766,
    lng: -116.5533,
    description: "Sandpoint is a charming mountain town nestled between Lake Pend Oreille and the Selkirk Mountains. Home to Schweitzer Mountain Resort and surrounded by national forest, it offers year-round outdoor recreation in one of Idaho's most scenic settings.",
    highlights: [
      'Schweitzer Mountain — 2,900 acres of skiable terrain',
      'Lake Pend Oreille — Idaho\'s largest lake at 43 miles long',
      'Pend d\'Oreille Bay Trail — waterfront walking and biking',
      'Gold Hill trailhead for backcountry exploration',
    ],
    bestSeason: ['summer', 'winter'],
    nearestCity: 'Spokane, WA',
    activities: ['kayaking', 'fishing', 'hiking', 'skiing-snowboarding', 'paddle-boarding', 'mountain-biking', 'camping', 'snowshoeing', 'boating-wakeboarding', 'wildlife-photography'],
    image: {
      url: 'https://images.unsplash.com/photo-1650396510270-233d2b93c1e2?w=1400&h=600&fit=crop&auto=format',
      alt: 'Wooden dock overlooking a mountain lake near Sandpoint, Idaho',
      credit: 'Amanda Bear',
      creditUrl: 'https://unsplash.com/@amndabear',
    },
  },
  {
    slug: 'priest-lake',
    name: 'Priest Lake',
    region: 'North Idaho Panhandle',
    lat: 48.5566,
    lng: -116.8692,
    description: "Priest Lake is a remote, pristine alpine lake surrounded by old-growth cedar forests in Idaho's northern panhandle. The 19-mile-long lake and its upper basin offer some of the most unspoiled wilderness experiences in the lower 48 states.",
    highlights: [
      'Navigation Trail — historic portage connecting upper and lower lakes',
      'Hanna Flats Cedar Grove — ancient western red cedars',
      'Roosevelt Grove of Ancient Cedars — 800-year-old trees',
      'Pristine sandy beaches with crystal-clear water',
    ],
    bestSeason: ['summer', 'fall'],
    nearestCity: 'Sandpoint, ID',
    activities: ['kayaking', 'fishing', 'hiking', 'paddle-boarding', 'camping', 'boating-wakeboarding', 'wildlife-photography'],
    image: {
      url: 'https://images.unsplash.com/photo-1601499973290-25545dc59798?w=1400&h=600&fit=crop&auto=format',
      alt: 'Evergreen forest meeting pristine lake water in the North Idaho panhandle',
      credit: 'Clay Elliot',
      creditUrl: 'https://unsplash.com/@ibidsy',
    },
  },
  {
    slug: 'hayden-lake',
    name: 'Hayden Lake',
    region: 'North Idaho Panhandle',
    lat: 47.7672,
    lng: -116.7573,
    description: "Hayden Lake is a peaceful 3,800-acre lake just north of Coeur d'Alene, popular with families and anglers seeking a quieter alternative to its larger neighbor. The clear waters hold bass, perch, and pike, and the surrounding hills offer excellent trail access.",
    highlights: [
      'Calm waters ideal for kayaking and paddleboarding',
      'Excellent smallmouth bass and northern pike fishing',
      'English Point recreation area with boat launch',
      'Close proximity to Coeur d\'Alene amenities',
    ],
    bestSeason: ['spring', 'summer'],
    nearestCity: "Coeur d'Alene, ID",
    activities: ['kayaking', 'fishing', 'paddle-boarding', 'boating-wakeboarding', 'wildlife-photography'],
    image: {
      url: 'https://images.unsplash.com/photo-1627929927841-e117e61349e6?w=1400&h=600&fit=crop&auto=format',
      alt: 'Calm lake water surrounded by green trees on a sunny day in North Idaho',
      credit: 'Sarah Peters',
      creditUrl: 'https://unsplash.com/@sjoy88',
    },
  },
  {
    slug: 'spirit-lake',
    name: 'Spirit Lake',
    region: 'North Idaho Panhandle',
    lat: 47.9649,
    lng: -116.8673,
    description: "Spirit Lake is a small, scenic community on the shores of its namesake lake in Bonner County. The lake offers good fishing and a quieter pace, while nearby Farragut State Park provides hundreds of acres of trails, camping, and waterfront access on Lake Pend Oreille.",
    highlights: [
      'Farragut State Park — former naval training station with extensive trails',
      'Quiet lake setting away from tourist crowds',
      'Bass, perch, and trout fishing opportunities',
      'Gateway to Selkirk Mountain backcountry',
    ],
    bestSeason: ['summer', 'fall'],
    nearestCity: 'Sandpoint, ID',
    activities: ['kayaking', 'fishing', 'hiking', 'camping', 'trail-running', 'wildlife-photography'],
    image: {
      url: 'https://images.unsplash.com/photo-1601499972772-eb9f0b0e10aa?w=1400&h=600&fit=crop&auto=format',
      alt: 'Pine trees under blue sky in the quiet countryside near Spirit Lake, Idaho',
      credit: 'Clay Elliot',
      creditUrl: 'https://unsplash.com/@ibidsy',
    },
  },
  {
    slug: 'lake-pend-oreille',
    name: 'Lake Pend Oreille',
    region: 'North Idaho Panhandle',
    lat: 48.1500,
    lng: -116.5500,
    description: "Lake Pend Oreille is Idaho's largest and deepest lake, stretching 43 miles with depths exceeding 1,150 feet. Fed by the Clark Fork River, it holds world-record Kamloops rainbow trout and offers everything from secluded coves for kayaking to open water for sailing and wakeboarding.",
    highlights: [
      "Idaho's largest lake at 94,600 acres with 111 miles of shoreline",
      'World-record Kamloops rainbow trout fishery',
      'Green Monarchs — dramatic cliffs rising from the eastern shore',
      'US Navy acoustic research facility (active submarine testing)',
    ],
    bestSeason: ['summer', 'fall'],
    nearestCity: 'Sandpoint, ID',
    activities: ['kayaking', 'fishing', 'hiking', 'paddle-boarding', 'camping', 'boating-wakeboarding', 'wildlife-photography', 'rock-climbing'],
    image: {
      url: 'https://images.unsplash.com/photo-1752364897659-6bef0cb5aba9?w=1400&h=600&fit=crop&auto=format',
      alt: 'Lake and lush forest meeting serene mountains in North Idaho',
      credit: 'Troy Olson',
      creditUrl: 'https://unsplash.com/@city2forest',
    },
  },
  {
    slug: 'north-fork-clearwater',
    name: 'North Fork Clearwater',
    region: 'North Central Idaho',
    lat: 46.8500,
    lng: -115.6000,
    description: "The North Fork of the Clearwater River cuts through some of Idaho's most rugged and wild terrain. Designated as a Wild and Scenic River, its whitewater rapids, steelhead runs, and remote canyon setting make it a bucket-list destination for serious outdoor enthusiasts.",
    highlights: [
      'Class III-IV whitewater rapids through pristine canyon',
      'World-class steelhead and cutthroat trout fishing',
      'Wild and Scenic River designation',
      'Remote access through Clearwater National Forest',
    ],
    bestSeason: ['spring', 'summer'],
    nearestCity: 'Orofino, ID',
    activities: ['fishing', 'hiking', 'camping', 'whitewater-rafting', 'wildlife-photography'],
    image: {
      url: 'https://images.unsplash.com/photo-1525160165727-345945f681cb?w=1400&h=600&fit=crop&auto=format',
      alt: 'River winding through dense evergreen forest in a mountain canyon',
      credit: 'Jeremy Bishop',
      creditUrl: 'https://unsplash.com/@jeremybishop',
    },
  },
  {
    slug: 'schweitzer-mountain',
    name: 'Schweitzer Mountain',
    region: 'North Idaho Panhandle',
    lat: 48.3677,
    lng: -116.6230,
    description: "Schweitzer Mountain Resort is North Idaho's premier ski destination, with 2,900 acres of terrain and views of three states and Canada from the summit. Summer transforms the mountain into a hiking, biking, and wildflower destination with lift-served trails.",
    highlights: [
      '2,900 skiable acres with 2,400 feet of vertical drop',
      'Views of Lake Pend Oreille, Selkirks, and Cabinet Mountains',
      'Lift-served mountain biking in summer',
      'Nordic skiing and snowshoe trails at the village',
    ],
    bestSeason: ['winter', 'summer'],
    nearestCity: 'Sandpoint, ID',
    activities: ['skiing-snowboarding', 'hiking', 'mountain-biking', 'snowshoeing', 'trail-running', 'wildlife-photography'],
    image: {
      url: 'https://images.unsplash.com/photo-1769854740618-42a1b4f8b3d9?w=1400&h=600&fit=crop&auto=format',
      alt: 'Snowy mountain landscape with ski slopes and lifts under blue sky',
      credit: 'Sijmen van Hooff',
      creditUrl: 'https://unsplash.com/@sijmen89',
    },
  },
  {
    slug: 'post-falls-rathdrum',
    name: 'Post Falls / Rathdrum',
    region: 'North Idaho Panhandle',
    lat: 47.7185,
    lng: -116.9515,
    description: "Post Falls and Rathdrum anchor the western edge of North Idaho's Kootenai County. The Spokane River falls provide dramatic scenery, while the surrounding Rathdrum Prairie offers open-terrain cycling, running, and access to Hauser and Twin Lakes.",
    highlights: [
      'Spokane River falls and dam with walking trails',
      'Q\'emiln Park — riverside trails and picnic areas',
      'Falls Park with historic power generation exhibits',
      'Gateway to Hauser Lake and Twin Lakes recreation',
    ],
    bestSeason: ['spring', 'summer', 'fall'],
    nearestCity: 'Spokane, WA',
    activities: ['kayaking', 'fishing', 'hiking', 'mountain-biking', 'camping', 'trail-running', 'boating-wakeboarding'],
    image: {
      url: 'https://images.unsplash.com/photo-1599663253861-a06a1bb2bad9?w=1400&h=600&fit=crop&auto=format',
      alt: 'Person sitting on rocks near a flowing river in North Idaho',
      credit: 'Karsten Winegeart',
      creditUrl: 'https://unsplash.com/@karsten116',
    },
  },
  {
    slug: 'boundary-county',
    name: 'Boundary County',
    region: 'North Idaho Panhandle',
    lat: 48.8000,
    lng: -116.3200,
    description: "Boundary County is Idaho's northernmost county, bordering Canada and home to the town of Bonners Ferry. The Kootenai River, Selkirk Mountains, and vast tracts of national forest create a sportsman's paradise for hunting, fishing, and backcountry exploration.",
    highlights: [
      'Kootenai National Wildlife Refuge — 2,774 acres of wetland habitat',
      'Selkirk Mountain caribou habitat (rare woodland caribou)',
      'Moyie River canyon and falls',
      'Remote backcountry hunting in the Selkirk Range',
    ],
    bestSeason: ['summer', 'fall', 'winter'],
    nearestCity: 'Bonners Ferry, ID',
    activities: ['fishing', 'hiking', 'hunting', 'camping', 'snowshoeing', 'wildlife-photography', 'rock-climbing'],
    image: {
      url: 'https://images.unsplash.com/photo-1632362103010-865840adbcb4?w=1400&h=600&fit=crop&auto=format',
      alt: 'Green meadow with mountain views in the North Idaho backcountry',
      credit: 'Jenna Ellis',
      creditUrl: 'https://unsplash.com/@j3nna_benna',
    },
  },
  {
    slug: 'panhandle-national-forest',
    name: 'Panhandle National Forest',
    region: 'North Idaho Panhandle',
    lat: 47.9000,
    lng: -116.6000,
    description: "The Idaho Panhandle National Forests span over 2.5 million acres across North Idaho, encompassing the Coeur d'Alene, St. Joe, and Kaniksu national forests. This massive wilderness area offers hundreds of miles of trails, remote camping, and some of the best hunting in the Pacific Northwest.",
    highlights: [
      '2.5 million acres of protected forest and wilderness',
      'Route of the Hiawatha — 15-mile rail-trail through tunnels',
      'Revett Lake and Independence Creek trailheads',
      'Dispersed camping throughout with minimal restrictions',
    ],
    bestSeason: ['summer', 'fall'],
    nearestCity: "Coeur d'Alene, ID",
    activities: ['hiking', 'hunting', 'mountain-biking', 'camping', 'snowshoeing', 'trail-running', 'wildlife-photography', 'rock-climbing'],
    image: {
      url: 'https://images.unsplash.com/photo-1745496316618-8f22bba218a1?w=1400&h=600&fit=crop&auto=format',
      alt: 'Golden sunset over forested mountains in the Idaho Panhandle',
      credit: 'Troy Olson',
      creditUrl: 'https://unsplash.com/@city2forest',
    },
  },
  {
    slug: 'selkirk-mountains',
    name: 'Selkirk Mountains',
    region: 'North Idaho Panhandle',
    lat: 48.5000,
    lng: -116.7000,
    description: "The Selkirk Mountains form a dramatic granite spine along Idaho's far-northern border with Canada and Washington. Home to grizzly bears, mountain goats, and some of the last woodland caribou in the lower 48, the Selkirks are a serious backcountry destination with alpine peaks exceeding 7,000 feet.",
    highlights: [
      'Selkirk Crest — alpine ridge with peaks above 7,000 feet',
      'Roman Nose and Harrison Peak — classic scrambles',
      'Grizzly bear and mountain goat habitat',
      'Remote, uncrowded alpine lakes and meadows',
    ],
    bestSeason: ['summer', 'fall'],
    nearestCity: 'Sandpoint, ID',
    activities: ['hiking', 'hunting', 'camping', 'snowshoeing', 'trail-running', 'wildlife-photography', 'rock-climbing'],
    image: {
      url: 'https://images.unsplash.com/photo-1723477450561-791fd67efa56?w=1400&h=600&fit=crop&auto=format',
      alt: 'Alpine lake surrounded by rocky peaks and evergreen trees in a mountain wilderness',
      credit: 'Jacob Castle',
      creditUrl: 'https://unsplash.com/@jccastle',
    },
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationsForActivity(activitySlug: string): Location[] {
  return locations.filter((l) => l.activities.includes(activitySlug));
}
