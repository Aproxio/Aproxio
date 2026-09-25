import api from './api';
import { ApiResponse } from '../types';

export interface ImpactData {
  metrics: Array<{
    value: string;
    label: string;
    detail: string;
  }>;
  initiatives: Array<{
    title: string;
    description: string;
    tag: string;
  }>;
}

export const fallbackImpact: ImpactData = {
  metrics: [
    {
      value: "100%",
      label: "EV Fleet Target by 2030",
      detail: "Over 45,000 active electric delivery vehicles deployed across 20+ metro hubs."
    },
    {
      value: "250M+",
      label: "Plastic Free Deliveries",
      detail: "100% recyclable, biodegradable paper packaging and compostable bag options."
    },
    {
      value: "15M+",
      label: "Meals Distributed via Aproxio Nourish",
      detail: "Nourishing underprivileged communities and partner families across regional fulfillment networks."
    },
    {
      value: "0",
      label: "Net Landfill Waste in Warehouses",
      detail: "Circular inventory recycling and bio-composting across all primary fulfillment hubs."
    }
  ],
  initiatives: [
    {
      title: "Decarbonizing Logistics Infrastructure",
      description: "Piloting CleanGrid solar battery swapping stations that recharge autonomous couriers and EV fleets in under 90 seconds.",
      tag: "Environment"
    },
    {
      title: "Direct Producer & Cooperative Sourcing",
      description: "Direct tie-ups with 30,000+ local agricultural producers, eliminating middlemen and guaranteeing fair minimum prices.",
      tag: "Producers"
    },
    {
      title: "Fleet Operator & Partner Welfare",
      description: "Comprehensive health insurance, emergency roadside assistance, and continuing education scholarships for families.",
      tag: "Community"
    }
  ]
};

export const getImpactData = async (): Promise<ImpactData> => {
  try {
    const response = await api.get<ApiResponse<ImpactData>>('/impact');
    return response.data.data;
  } catch (error: any) {
    console.warn('Backend unavailable, using fallback impact data:', error?.message);
    return fallbackImpact;
  }
};
