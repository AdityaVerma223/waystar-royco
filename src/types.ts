export type PageId = 'home' | 'leadership' | 'divisions' | 'press';

export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  department: string;
  category: 'family' | 'executive' | 'governance';
  quote: string;
  bio: string;
  image: string;
  tenure: string;
  votingPower: string;
  committees: string[];
  stockUnits: string;
  redactedNotes: string;
  statusBadge: string;
}

export interface DivisionMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface DivisionAsset {
  name: string;
  type: string;
  detail: string;
}

export interface Division {
  id: string;
  slug: 'news' | 'parks' | 'cruises' | 'studios' | 'living-plus';
  name: string;
  shortName: string;
  tagline: string;
  iconName: string;
  leadExecutive: string;
  leadTitle: string;
  overview: string;
  statHighlight: string;
  statLabel: string;
  revenueContribution: string;
  metrics: DivisionMetric[];
  assets: DivisionAsset[];
  regulatoryNotice: string;
  incidentHistoryNote: string;
  quote: {
    speaker: string;
    text: string;
  };
}

export interface PressRelease {
  id: string;
  code: string;
  date: string;
  category: 'Governance' | 'Crisis Containment' | 'Mergers & Tech' | 'Earnings' | 'Product Launch';
  title: string;
  subtitle: string;
  urgentNotice?: boolean;
  leadExecutive: string;
  location: string;
  summary: string;
  bodyParagraphs: string[];
  quote: {
    speaker: string;
    title: string;
    text: string;
  };
  safeHarborClause: string;
}

export interface TickerData {
  symbol: string;
  price: number;
  change: number;
  percentChange: number;
  high52: number;
  low52: number;
  marketCap: string;
  peRatio: string;
}

export interface UserSession {
  name: string;
  role: string;
  clearanceLevel: string;
  email: string;
  avatarInitials: string;
  department: string;
}

