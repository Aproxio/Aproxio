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
      value: "100%*",
      label: "Digital Product Traceability",
      detail:
        "Product, variant, seller, shipment and return information can be tracked throughout the Aproxio commerce journey."
    },
    {
      value: "50+",
      label: "Fashion Sellers & Brands",
      detail:
        "A marketplace ecosystem designed to help independent sellers, emerging brands and fashion businesses reach customers digitally."
    },
    {
      value: "10K+",
      label: "Clothing Products",
      detail:
        "A clothing-focused catalog covering products, sizes, colors, variants, inventory and seller information."
    },
    {
      value: "100%",
      label: "Return & Exchange Visibility",
      detail:
        "Structured return and exchange workflows with eligibility checks, reverse logistics, quality checks and refund or replacement tracking."
    }
  ],

  initiatives: [
    {
      title: "Building a Circular Fashion Ecosystem",
      description:
        "Helping extend the lifecycle of clothing through structured returns, quality checks, resale opportunities, recycling and responsible disposal.",
      tag: "Circular Fashion"
    },
    {
      title: "Supporting Fashion Sellers & Emerging Brands",
      description:
        "Creating digital opportunities for independent sellers, local businesses and emerging fashion brands to reach customers through a unified marketplace.",
      tag: "Inclusive Economy"
    },
    {
      title: "Smarter & More Responsible Logistics",
      description:
        "Working towards efficient deliveries, optimized shipments and reduced packaging waste through better logistics and fulfillment processes.",
      tag: "Sustainable Logistics"
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
