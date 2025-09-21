import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/lib/mongodb/mongoose';
import { BookDonation, FoodDonation, ClothesDonation } from '@/lib/mongodb/models';
import { Types } from 'mongoose';

type Params = { id: string };

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    await dbConnect();

    // Validate ID format
    if (!Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid donation ID' },
        { status: 400 }
      );
    }

    // Try to find the donation in each collection
    console.log('Searching for donation with ID:', params.id);
    const bookDonation = await BookDonation.findById(params.id);
    const foodDonation = await FoodDonation.findById(params.id);
    const clothesDonation = await ClothesDonation.findById(params.id);

    console.log('Search results:', {
      bookDonation: bookDonation ? 'found' : 'not found',
      foodDonation: foodDonation ? 'found' : 'not found',
      clothesDonation: clothesDonation ? 'found' : 'not found'
    });

    const donation = bookDonation || foodDonation || clothesDonation;

    if (!donation) {
      return NextResponse.json(
        { success: false, message: 'Donation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      certificate: {
        donorName: donation.fullName,
        date: donation.donationDate,
        location: 'Pune, India'
      }
    });
  } catch (error) {
    console.error('Error fetching certificate:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error fetching certificate',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}