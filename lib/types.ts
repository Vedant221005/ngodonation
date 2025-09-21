export interface BaseDonationData {
  fullName: string;
  contactNumber: string;
  donationDate: string;
  deliveryMethod: 'pickup' | 'dropoff';
  address?: string;
  additionalNotes?: string;
}

export interface FoodDonationData extends BaseDonationData {
  foodType: 'non-perishable' | 'fresh-produce' | 'baby-food' | 'canned-goods' | 'water' | 'other';
  quantity: number;
}

export interface ClothesDonationData extends BaseDonationData {
  clothingType: 'children' | 'winter' | 'professional' | 'casual' | 'shoes' | 'accessories' | 'other';
  numberOfItems: number;
}

export interface BookDonationData extends BaseDonationData {
  bookName: string;
  authorName: string;
  condition: 'new' | 'like-new' | 'good' | 'fair';
}

export type DonationData = FoodDonationData | ClothesDonationData | BookDonationData;