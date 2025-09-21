"use client";

import { useSearchParams } from "next/navigation";
import DonationCertificate from "@/components/DonationCertificate";

export default function CertificatePage() {
  const searchParams = useSearchParams();
  const fullName = searchParams.get("fullName");
  const donationMethod = searchParams.get("method");
  const address = searchParams.get("address");

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Certificate of Donation
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Thank you for your generous donation!
          </p>
        </div>

        {donationMethod === 'pickup' && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-center">
              <span className="font-semibold">Pickup Note:</span> Our volunteer will come to your address to collect the donated items. Thank you for your generous donation!
            </p>
            {address && (
              <p className="text-blue-600 text-center mt-2 text-sm">
                Pickup Address: {address}
              </p>
            )}
          </div>
        )}

        {donationMethod === 'dropoff' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-center">
              <span className="font-semibold">Drop-off Note:</span> Please deliver your donations to:
            </p>
            <p className="text-green-700 text-center mt-2 font-medium">
              PCCOE&R, Pune
            </p>
            <p className="text-green-600 text-center mt-1 text-sm">
              Working Hours: Monday to Saturday, 10:00 AM - 5:00 PM
            </p>
          </div>
        )}

        <div className="bg-white p-2 md:p-6 rounded-xl shadow-lg flex justify-center items-center overflow-hidden">
          <DonationCertificate
            donorName={fullName || "Donor"}
            date={new Date()}
          />
        </div>
      </div>
    </main>
  );
}