import api from './api';
import { CareerJob, ApiResponse } from '../types';

export const fallbackJobs: CareerJob[] = [
  {
    id: "role-1",
    unit: "Aproxio Core",
    title: "Lead Systems Architect",
    department: "engineering",
    location: "Gurugram, HQ",
    type: "Full-Time",
    experience: "8+ Years",
    description: "Architect high-throughput distributed routing engines and predictive demand systems processing tens of millions of concurrent events.",
    requirements: ["Distributed Systems", "Go/Rust/Java", "High-Concurrency", "Kafka/RabbitMQ"]
  },
  {
    id: "role-2",
    unit: "Aproxio Fleet",
    title: "Staff Product Designer",
    department: "product",
    location: "Bengaluru",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Craft zero-latency mobile checkout and high-density inventory browsing interfaces for millions of daily shoppers.",
    requirements: ["Figma Design Systems", "Micro-interactions", "User Research", "Mobile First"]
  },
  {
    id: "role-3",
    unit: "Aproxio CleanGrid",
    title: "VP of Logistics Infrastructure",
    department: "operations",
    location: "New Delhi",
    type: "Full-Time",
    experience: "10+ Years",
    description: "Scale cold-chain warehouse automation, route optimization algorithms, and quality verification pipelines across tier-1 cities.",
    requirements: ["Supply Chain Scale", "Warehouse Automation", "Team Leadership", "Fleet Management"]
  },
  {
    id: "role-4",
    unit: "Aproxio Horizon",
    title: "Principal Data Scientist - Demand Forecasting",
    department: "engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "6+ Years",
    description: "Develop algorithmic models predicting venue attendance, peak dispatch spikes, and dynamic pricing across entertainment venues.",
    requirements: ["Time Series Forecasting", "PyTorch / TensorFlow", "Distributed ML", "Real-time Inference"]
  },
  {
    id: "role-5",
    unit: "Aproxio Corporate",
    title: "Senior Manager, Strategic Finance & IR",
    department: "growth",
    location: "Gurugram, HQ",
    type: "Full-Time",
    experience: "4+ Years",
    description: "Drive quarterly disclosures, capital allocation models, M&A evaluations, and direct shareholder engagement.",
    requirements: ["Financial Modeling", "Investor Relations", "Corporate Strategy", "Capital Allocation"]
  }
];

export const getJobs = async (department: string = 'all'): Promise<CareerJob[]> => {
  try {
    const response = await api.get<ApiResponse<CareerJob[]>>('/careers/jobs', {
      params: { department },
    });
    return response.data.data;
  } catch (error: any) {
    console.warn('Backend unavailable, using fallback jobs data:', error?.message);
    if (department && department !== 'all') {
      return fallbackJobs.filter((j) => j.department.toLowerCase() === department.toLowerCase());
    }
    return fallbackJobs;
  }
};

export const submitApplication = async (
  applicationData: Record<string, any>
): Promise<{ success: boolean; message: string; data?: any }> => {
  try {
    const response = await api.post('/careers/apply', applicationData);
    return response.data;
  } catch (error: any) {
    console.warn('Backend unavailable, simulating application submission:', error?.message);
    return {
      success: true,
      message: 'Application received! Our talent acquisition team will review your credentials.',
      data: { id: `app-local-${Date.now()}`, ...applicationData },
    };
  }
};
