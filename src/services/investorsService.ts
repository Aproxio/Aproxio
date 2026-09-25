import api from './api';
import { ApiResponse } from '../types';

export interface ReportItem {
  id: string;
  period: string;
  title: string;
  category: string;
  badge: string;
  date: string;
  summary: string;
  pdfUrl: string;
}

export const fallbackReports: ReportItem[] = [
  {
    id: "q1-fy27",
    period: "Q1 FY27",
    title: "Shareholders' Letter & Q1 Results",
    category: "letters",
    badge: "New",
    date: "August 2026",
    summary: "Record consolidated quarterly revenue of ₹4,206 Cr (+42.8% YoY) with adjusted EBITDA margin of 18.4%. Autonomous logistics infrastructure inflection achieved.",
    pdfUrl: "#"
  },
  {
    id: "q4-fy26",
    period: "Q4 FY26",
    title: "Annual Performance Report & Q4 Financials",
    category: "presentations",
    badge: "Annual",
    date: "May 2026",
    summary: "Full year consolidated review, capital return framework update, and operational scaling of Aproxio Horizon commerce protocol.",
    pdfUrl: "#"
  },
  {
    id: "q3-fy26",
    period: "Q3 FY26",
    title: "Shareholders' Letter & Festive Surge Review",
    category: "letters",
    badge: "Archived",
    date: "January 2026",
    summary: "Peak holiday volume analysis, automated fulfillment hub expansion to 1,000+ units, and CleanGrid microgrid rollout milestones.",
    pdfUrl: "#"
  },
  {
    id: "q2-fy26",
    period: "Q2 FY26",
    title: "Quarterly Financial Statements & Transcripts",
    category: "presentations",
    badge: "Archived",
    date: "October 2025",
    summary: "Comprehensive earnings transcript, executive Q&A, and segment-wise unit economics disclosures.",
    pdfUrl: "#"
  }
];

export const getReports = async (category: string = 'all'): Promise<ReportItem[]> => {
  try {
    const response = await api.get<ApiResponse<ReportItem[]>>('/investors/reports', {
      params: { category },
    });
    return response.data.data;
  } catch (error: any) {
    console.warn('Backend unavailable, using fallback reports data:', error?.message);
    if (category && category !== 'all') {
      return fallbackReports.filter((r) => r.category.toLowerCase() === category.toLowerCase());
    }
    return fallbackReports;
  }
};
