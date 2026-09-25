export interface Business {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  color: string;
  link: string;
  highlight?: string;
  status?: string;
  category?: string;
  codename?: string;
  launchWindow?: string;
  clearanceLevel?: string;
  classifiedSpec?: {
    label: string;
    redactedValue: string;
    revealedValue: string;
  };
  telemetry?: {
    label: string;
    value: string;
  }[];
  dossier?: {
    mission: string;
    architecture: string[];
    readiness: number;
    targetDeployment: string;
  };
}


export interface CareerJob {
  id: string;
  unit?: string;
  title: string;
  department: string;
  departmentLabel?: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export interface FinancialMetric {
  label: string;
  value: string;
  period: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface QuarterlyReport {
  quarter: string;
  year: string;
  date: string;
  title: string;
  pdfUrl: string;
  presentationUrl?: string;
  audioUrl?: string;
}

export interface ShareholderLetter {
  year: string;
  title: string;
  excerpt: string;
  date: string;
  readUrl: string;
}

export interface ImpactMetric {
  metric: string;
  label: string;
  description: string;
  icon?: string;
}

export interface Initiative {
  title: string;
  category: string;
  description: string;
  impact: string;
  status?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  organization?: string;
  category: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface NavItem {
  label: string;
  path: string;
}
