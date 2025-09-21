import { Document } from 'mongoose';

export interface FoodDonationType extends Document {
  fullName: string;
  contactNumber: string;
  foodType: 'non-perishable' | 'fresh-produce' | 'baby-food' | 'canned-goods' | 'water' | 'other';
  quantity: number;
  donationDate: Date;
  deliveryMethod: 'pickup' | 'dropoff';
  donationMethod?: 'pickup' | 'dropoff'; // Alias for deliveryMethod
  address?: string;
  additionalNotes?: string;
  createdAt: Date;
}

export interface ClothesDonationType extends Document {
  fullName: string;
  contactNumber: string;
  clothingType: 'children' | 'winter' | 'professional' | 'casual' | 'shoes' | 'accessories' | 'other';
  numberOfItems: number;
  donationDate: Date;
  deliveryMethod: 'pickup' | 'dropoff';
  donationMethod?: 'pickup' | 'dropoff'; // Alias for deliveryMethod
  address?: string;
  additionalNotes?: string;
  createdAt: Date;
}

export interface BookDonationType extends Document {
  fullName: string;
  contactNumber: string;
  bookName: string;
  authorName: string;
  condition: 'new' | 'like-new' | 'good' | 'fair';
  donationDate: Date;
  deliveryMethod: 'pickup' | 'dropoff';
  donationMethod?: 'pickup' | 'dropoff'; // Alias for deliveryMethod
  address?: string;
  additionalNotes?: string;
  createdAt: Date;
}