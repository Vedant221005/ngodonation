import mongoose from 'mongoose';

const foodDonationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  foodType: {
    type: String,
    required: [true, 'Type of food is required'],
    enum: ['non-perishable', 'fresh-produce', 'baby-food', 'canned-goods', 'water', 'other'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [1, 'Quantity must be at least 1'],
  },
  donationDate: {
    type: Date,
    required: [true, 'Donation date is required'],
  },
  deliveryMethod: {
    type: String,
    required: [true, 'Delivery method is required'],
    enum: ['pickup', 'dropoff'],
  },
  address: {
    type: String,
    required: function(this: { deliveryMethod: string }) {
      return this.deliveryMethod === 'pickup';
    },
  },
  additionalNotes: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const clothesDonationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  clothingType: {
    type: String,
    required: [true, 'Type of clothing is required'],
    enum: ['children', 'winter', 'professional', 'casual', 'shoes', 'accessories', 'other'],
  },
  numberOfItems: {
    type: Number,
    required: [true, 'Number of items is required'],
    min: [1, 'Number of items must be at least 1'],
  },
  donationDate: {
    type: Date,
    required: [true, 'Donation date is required'],
  },
  deliveryMethod: {
    type: String,
    required: [true, 'Delivery method is required'],
    enum: ['pickup', 'dropoff'],
  },
  address: {
    type: String,
    required: function(this: { deliveryMethod: string }) {
      return this.deliveryMethod === 'pickup';
    },
  },
  additionalNotes: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const bookDonationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  bookName: {
    type: String,
    required: [true, 'Book name is required'],
  },
  authorName: {
    type: String,
    required: [true, 'Author name is required'],
  },
  condition: {
    type: String,
    required: [true, 'Book condition is required'],
    enum: ['new', 'like-new', 'good', 'fair'],
  },
  donationDate: {
    type: Date,
    required: [true, 'Donation date is required'],
  },
  deliveryMethod: {
    type: String,
    required: [true, 'Delivery method is required'],
    enum: ['pickup', 'dropoff'],
  },
  address: {
    type: String,
    required: function(this: { deliveryMethod: string }) {
      return this.deliveryMethod === 'pickup';
    },
  },
  additionalNotes: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const FoodDonation = mongoose.models.FoodDonation || mongoose.model('FoodDonation', foodDonationSchema);
export const ClothesDonation = mongoose.models.ClothesDonation || mongoose.model('ClothesDonation', clothesDonationSchema);
export const BookDonation = mongoose.models.BookDonation || mongoose.model('BookDonation', bookDonationSchema);