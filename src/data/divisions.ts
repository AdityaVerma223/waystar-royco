import { Division } from '../types';

export const DIVISIONS: Division[] = [
  {
    id: 'news',
    slug: 'news',
    name: 'ATN — American Television Network',
    shortName: 'ATN News',
    tagline: 'We Hear For You. Delivering Unfiltered Reality 24 Hours A Day.',
    iconName: 'Tv',
    leadExecutive: 'Tom Wambsgans',
    leadTitle: 'Chairman & Chief Executive, ATN Global',
    overview: 'ATN is the undisputed titan of cable news, political commentary, and prime-time cultural consensus. Broadcasting across 114 million households, ATN commands the domestic narrative through high-octane commentary, proprietary voter sentiment analytics, and election night deciders that shape western democracy.',
    statHighlight: '114M+',
    statLabel: 'Nightly Domestic Viewers',
    revenueContribution: '$14.8B (31% of Gross Conglomerate Revenue)',
    metrics: [
      { label: 'Cable Market Share', value: '44.8%', subtext: '#1 Prime Time Slot for 19 Consecutive Years' },
      { label: 'Regional Affiliates', value: '240+', subtext: 'Full Geographic Saturation' },
      { label: 'Fact-Check Disputes Settled', value: '100%', subtext: 'All Out-of-Court Confidential Accords' },
      { label: 'Studio Digital Displays', value: '8K Ultra-Wall', subtext: 'Engineered for Maximum Urgency' }
    ],
    assets: [
      { name: 'The Evening Standard with Mark Ravenhead', type: 'Flagship Broadcast', detail: 'High-rating nationalist news hour with 8.2M live households' },
      { name: 'ATN Digital War Room', type: 'Digital Platform', detail: 'Real-time narrative push notifications and algorithmic outrage tuning' },
      { name: 'Washington Bureau 1', type: 'Political Infrastructure', detail: 'Direct subterranean fiber link into Senate cloakroom annexes' },
      { name: 'Financial Morning Bell', type: 'Market Broadcast', detail: 'Wall Street commentary celebrating dividend tax elimination' }
    ],
    regulatoryNotice: 'ATN broadcasts operate under Section 315 exemptions. Editorial perspectives are formulated independently, in close consultation with the Chairman’s dining room.',
    incidentHistoryNote: 'The 2020 Midterm Election Call Center server outage has been independently validated as a harmless software calibration glitch.',
    quote: {
      speaker: 'Tom Wambsgans',
      text: 'We are not in the business of information. We are in the business of adrenaline and belonging.'
    }
  },
  {
    id: 'parks',
    slug: 'parks',
    name: 'Waystar Parks & Experiences (Brightstar Parks)',
    shortName: 'Brightstar Parks',
    tagline: 'Engineered Wonder. Monetized Joy. Zero Unapproved Memories.',
    iconName: 'Sparkles',
    leadExecutive: 'Roman Roy & Regional VPs',
    leadTitle: 'Executive Oversight Committee, Parks & Resorts',
    overview: 'Brightstar Parks & Resorts welcomes over 85 million guests annually into meticulously managed physical wonderlands across Orlando, Paris, Shanghai, and Dubai. Through proprietary queue monetization, dynamic pricing fast-lanes, and beloved intellectual property characters, Brightstar converts human leisure into predictable EBITDA.',
    statHighlight: '85M+',
    statLabel: 'Annual Turnstile Admissions',
    revenueContribution: '$11.2B (24% of Gross Conglomerate Revenue)',
    metrics: [
      { label: 'Global Mega-Resorts', value: '18 Sites', subtext: 'Spanning 4 Continents and 48,000 Hotel Keys' },
      { label: 'Mascot Retention Rate', value: '99.4%', subtext: 'Dolfi the Dolphin Trademark Exclusivity' },
      { label: 'Average Per-Capita Spend', value: '$248.50', subtext: 'Excluding Mandatory Hydration Surcharges' },
      { label: 'Class Action Waiver Rate', value: '100%', subtext: 'Embedded into Every Mobile Ticket Barcode' }
    ],
    assets: [
      { name: 'Brightstar Magic Kingdom (Orlando)', type: 'Mega Theme Park', detail: 'Home of the Goliath G-Force Hyper-Coaster and Dolfi Lagoon' },
      { name: 'Dolfi & Friends Character Universe', type: 'Children IP', detail: 'Merchandised across 14,000 branded toy lines and sweet treats' },
      { name: 'Brightstar Paris Adventure', type: 'European Resort', detail: 'Operating with specialized labor concessions negotiated with the prefecture' },
      { name: 'VIP FastPass Platinum Tier', type: 'Yield Enhancement', detail: 'Allows high-net-worth guests to physically bypass all waiting enclosures' }
    ],
    regulatoryNotice: 'All park entrants contractually agree to binding arbitration in Delaware and release Waystar Royco from liability regarding roller coaster inertia adjustments.',
    incidentHistoryNote: 'Costume ventilation protocols for Dolfi suit performers were comprehensively upgraded following the record heatwave of July 2022.',
    quote: {
      speaker: 'Roman Roy',
      text: 'Kids want sugar, parents want alcohol, and we own the turnstile between them. It’s an unbeatable margin.'
    }
  },
  {
    id: 'cruises',
    slug: 'cruises',
    name: 'Brightstar Cruise Lines',
    shortName: 'Brightstar Cruises',
    tagline: 'Sovereignty Beyond the Horizon. Luxury in International Waters.',
    iconName: 'Ship',
    leadExecutive: 'Gerri Kellman & Maritime Risk Board',
    leadTitle: 'Maritime Compliance & Risk Management Overseers',
    overview: 'Brightstar Cruise Lines operates a fleet of thirty-two ultra-luxury passenger superliners offering lavish Caribbean voyages, Mediterranean expeditions, and private island excursions. Registered under friendly maritime flags in the Marshall Islands, Brightstar pairs world-class dining and casino gambling with unparalleled jurisdictional autonomy.',
    statHighlight: '32 Vessels',
    statLabel: 'Offshore Superliner Fleet',
    revenueContribution: '$8.4B (18% of Gross Conglomerate Revenue)',
    metrics: [
      { label: 'Annual Voyage Days', value: '11,400', subtext: 'Continuous Ocean Navigation' },
      { label: 'Casino Gaming Revenue', value: '$3.8B', subtext: 'Tax-Free Extraterritorial Gaming Yield' },
      { label: 'Legal Flag State', value: 'Marshall Islands', subtext: 'Optimized Maritime Law Protections' },
      { label: 'Legacy Document Shred Ratio', value: '100%', subtext: 'Historic Physical Archives Digitized and Deprecated' }
    ],
    assets: [
      { name: 'The Waystar Sovereign', type: 'Mega-Cruise Ship', detail: '6,400-passenger flagship with 14 swimming pools and offshore hedge fund suite' },
      { name: 'Brightstar Voyager & Horizon', type: 'Transatlantic Luxury', detail: 'High-roller private decks with dedicated biometric private security' },
      { name: 'Isla de la Estrella (Private Atoll)', type: 'Sovereign Island Asset', detail: 'Fully owned private island with zero customs inspections' },
      { name: 'The Captain’s Safe Program', type: 'Discretionary Asset', detail: 'Bespoke dispute resolution protocol for high-profile suite guests' }
    ],
    regulatoryNotice: 'Brightstar Cruises is governed exclusively by the Admiralty Laws of the Republic of the Marshall Islands. Terrestrial subpoenas carry non-binding advisory status only.',
    incidentHistoryNote: 'The comprehensive internal report code-named "The Horizon Inquiry" has concluded that all historic logbook discrepancies were clerical artifacts.',
    quote: {
      speaker: 'Gerri Kellman',
      text: 'In international waters, jurisdictional ambiguity is not a loophole — it is our chief amenity.'
    }
  },
  {
    id: 'studios',
    slug: 'studios',
    name: 'Waystar Studios & Brightstar Pictures',
    shortName: 'Waystar Studios',
    tagline: 'High-Yield Blockbusters. Algorithmic IP. Global Cultural Real Estate.',
    iconName: 'Film',
    leadExecutive: 'Kendall Roy & Creative Council',
    leadTitle: 'Executive Producers & Theatrical Greenlight Syndicate',
    overview: 'Waystar Studios produces, finances, and distributes mega-budget theatrical tentpoles, multi-season prestige television, and global streaming content. With an intellectual property vault containing over 4,000 legacy films, Waystar Studios monetizes childhood nostalgia through relentless franchise sequels, cinematic universes, and consumer merchandise licensing.',
    statHighlight: '4,000+',
    statLabel: 'Film Library Catalog Assets',
    revenueContribution: '$12.6B (27% of Gross Conglomerate Revenue)',
    metrics: [
      { label: 'Global Box Office Take', value: '$6.2B', subtext: 'Across 14 Theatrical Releases in FY24' },
      { label: 'Star-Go Subscribers', value: '42.8M', subtext: 'Proprietary Streaming Platform' },
      { label: 'Merchandise Retail Value', value: '$4.1B', subtext: 'Global Toys, Apparel, & Food Alliances' },
      { label: 'Franchise Sequel Ratio', value: '88%', subtext: 'Optimized IP Risk Mitigation' }
    ],
    assets: [
      { name: 'The Biggest Turkey in the World (Franchise)', type: 'Academy Award Nominee', detail: 'Family comedy franchise grossing $1.4B globally across three installments' },
      { name: 'Kalispell: The Final Border', type: 'Action Tentpole', detail: 'Explosive Cold War espionage thriller shot on location in Eastern Europe' },
      { name: 'Star-Go On-Demand', type: 'Direct-to-Consumer App', detail: 'Exclusive home of Waystar film catalog, live ATN simulcasts, and sports' },
      { name: 'Burbank Production Lot', type: 'Soundstage Real Estate', detail: '48 soundstages hosting major studio productions and sovereign commercials' }
    ],
    regulatoryNotice: 'All screenwriters, directors, and performers sign perpetual rights clearances including synthetic voice recreation and posthumous holographic performance permissions.',
    incidentHistoryNote: 'The production budget overruns for Kalispell 2 were successfully offset by tax credits secured from European sub-regional cultural ministries.',
    quote: {
      speaker: 'Kendall Roy',
      text: 'It’s not cinema. It’s a multi-touchpoint IP flywheel that captures mental market share from cradle to grave.'
    }
  },
  {
    id: 'living-plus',
    slug: 'living-plus',
    name: 'Waystar Living+ (Next-Gen Real Estate)',
    shortName: 'Living+',
    tagline: 'Land. Longevity. Legacy. Where Tomorrow Never Ends.',
    iconName: 'Building2',
    leadExecutive: 'Kendall Roy & Strategic Ventures',
    leadTitle: 'Co-Founders & Futurism Syndicate',
    overview: 'Living+ is Waystar Royco’s radical foray into integrated longevity real estate. Combining luxury master-planned communities, cruise-ship style concierge amenities, and proprietary hyperbaric oxygen chambers with 24/7 ATN security, Living+ guarantees affluent retirees not just a home, but extended biological existence and high-yield estate transfers.',
    statHighlight: '$45B',
    statLabel: 'Projected 5-Year Enterprise Valuation',
    revenueContribution: 'Pre-Revenue (Projected $8.5B by FY28)',
    metrics: [
      { label: 'Target Demographic Age', value: '68-92', subtext: 'High Net-Worth Life Savings Conversion' },
      { label: 'Oxygen Enrichment Level', value: '+35%', subtext: 'Circulated Through Master Bedroom Ducts' },
      { label: 'Contractual Life Expectancy', value: '100+ Years', subtext: 'Subject to Pro-Rata Biological Variance' },
      { label: 'Pre-Sales Reserve Deposits', value: '$1.2B', subtext: 'Fully Non-Refundable Commitment Bonds' }
    ],
    assets: [
      { name: 'Living+ Cloud Nine (Scottsdale)', type: 'Master Community', detail: '1,200 hyperbaric villas adjacent to private championship golf' },
      { name: 'The Rejuvenation Pavilion', type: 'Longevity Tech', detail: 'Medical-grade cryo-baths, stem-cell cocktails, and ATN private screening' },
      { name: 'End-of-Life Dignity Suite', type: 'Legacy Management', detail: 'Pre-paid probate execution handled directly by Waystar Legal' }
    ],
    regulatoryNotice: 'Living+ is not an accredited healthcare facility or medical provider. Longevity claims are visionary projections based on internal statistical simulations.',
    incidentHistoryNote: 'Architectural renderings presented at the Investor Day were verified to conform to all applicable digital compositing standards.',
    quote: {
      speaker: 'Kendall Roy',
      text: 'What if you could live forever inside a Waystar theme park with a stock ticker on the kitchen wall? That’s Living+.'
    }
  }
];
