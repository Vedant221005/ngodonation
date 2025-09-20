import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb/mongoose';
import { FoodDonation, ClothesDonation, BookDonation } from '@/lib/mongodb/models';

export async function GET() {
  try {
    await dbConnect();

    // Remove 'status' field from all collections using $unset
    await Promise.all([
      FoodDonation.updateMany({}, { $unset: { status: "" } }),
      ClothesDonation.updateMany({}, { $unset: { status: "" } }),
      BookDonation.updateMany({}, { $unset: { status: "" } })
    ]);

    return NextResponse.json({ message: 'Successfully removed status field from all documents' });
  } catch (error) {
    console.error('Cleanup error:', error);
    return NextResponse.json({ error: 'Failed to cleanup database' }, { status: 500 });
  }
}