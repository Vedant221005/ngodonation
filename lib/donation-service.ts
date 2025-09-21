import { DonationData } from './types';

export async function submitDonation(type: 'food' | 'clothes' | 'books', data: DonationData) {
  try {
    const response = await fetch(`/api/donations/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit donation');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting donation:', error);
    throw error;
  }
}