import api from './api';
import { Business, ApiResponse } from '../types';

export const fallbackBusinesses: Business[] = [
  {
    id: 'aproxio',
    title: 'Aproxio',
    subtitle: 'Our first product',
    status: 'Coming Soon',
    launchWindow: '2026',
    tagline: 'Our first product — more to come',
    description:
      'The first business under the Aproxio umbrella. Built for everyday usefulness, reliability, and a standard we will carry into every product we launch next.',
    color: '#0A0A0A',
    link: '/contact',
  },
];

export const getBusinesses = async (): Promise<Business[]> => {
  try {
    const response = await api.get<ApiResponse<Business[]>>('/businesses');
    const backendData = response.data.data;
    if (Array.isArray(backendData) && backendData.length > 0) {
      return backendData.map((item) => {
        const fallback: Partial<Business> =
          fallbackBusinesses.find((f) => f.id === item.id) || {};
        return {
          ...fallback,
          ...item,
          status: item.status || fallback.status || 'Coming Soon',
        } as Business;
      });
    }
    return fallbackBusinesses;
  } catch (error: any) {
    console.warn('Backend unavailable, using fallback businesses data:', error?.message);
    return fallbackBusinesses;
  }
};
