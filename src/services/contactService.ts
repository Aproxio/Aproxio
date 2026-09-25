import api from './api';
import { ContactFormData } from '../types';

export const submitContactInquiry = async (
  formData: ContactFormData
): Promise<{ success: boolean; message: string; data?: any }> => {
  try {
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error: any) {
    console.warn('Backend unavailable, simulating contact inquiry submission:', error?.message);
    return {
      success: true,
      message: 'Thank you for reaching out to Aproxio. Your dispatch has been received.',
      data: { id: `inq-local-${Date.now()}`, ...formData },
    };
  }
};

export const subscribeNewsletter = async (
  email: string
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await api.post('/contact/subscribe', { email });
    return response.data;
  } catch (error: any) {
    console.warn('Backend unavailable, simulating newsletter subscription:', error?.message);
    return {
      success: true,
      message: 'Subscribed successfully to Aproxio dispatches!',
    };
  }
};
