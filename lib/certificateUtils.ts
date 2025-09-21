import dbConnect from './mongodb/mongoose';
import { BookDonation, ClothesDonation, FoodDonation } from './mongodb/models';
import { Types } from 'mongoose';

interface CertificateData {
  donorName: string;
  date: Date;
  location: string;
  donationMethod: string;
  address?: string;
}

export async function getCertificate(donationId: string): Promise<CertificateData> {
  await dbConnect();

  // Validate ID format
  if (!Types.ObjectId.isValid(donationId)) {
    throw new Error('Invalid donation ID');
  }

  // Try to find the donation in each collection
  const bookDonation = await BookDonation.findById(donationId);
  const clothesDonation = await ClothesDonation.findById(donationId);
  const foodDonation = await FoodDonation.findById(donationId);

  const donation = bookDonation || clothesDonation || foodDonation;

  if (!donation) {
    throw new Error('Donation not found');
  }

  return {
    donorName: donation.fullName,
    date: donation.donationDate,
    location: 'Pune, India', // You can make this dynamic if needed
    donationMethod: donation.donationMethod || 'In-person',
    address: donation.address
  };
}