import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb/mongoose';
import { BookDonation } from '@/lib/mongodb/models';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();

    const donation = new BookDonation(data);
    await donation.save();

    return NextResponse.json({ 
      success: true, 
      message: 'Book donation submitted successfully',
      donation,
      donationId: donation._id 
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error submitting book donation',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const donations = await BookDonation.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ 
      success: true, 
      donations 
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error fetching book donations',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}