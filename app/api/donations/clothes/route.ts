import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb/mongoose';
import { ClothesDonation } from '@/lib/mongodb/models';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();

    const donation = new ClothesDonation(data);
    await donation.save();

    return NextResponse.json({ 
      success: true, 
      message: 'Clothes donation submitted successfully',
      donation 
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error submitting clothes donation',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const donations = await ClothesDonation.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ 
      success: true, 
      donations 
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error fetching clothes donations',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}