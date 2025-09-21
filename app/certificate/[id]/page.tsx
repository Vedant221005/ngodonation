"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import DonationCertificate from '@/components/DonationCertificate';

export default function CertificatePage() {
  const params = useParams();
  const [certificateData, setCertificateData] = useState<null | {
    donorName: string;
    date: Date;
    location: string;
    donationMethod: string;
    address?: string;
  }>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const response = await fetch(`/api/certificate/${params.id}`);
        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.message || 'Failed to fetch certificate');
        }
        
        setCertificateData(result.certificate);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch certificate');
      }
    };

    if (params.id) {
      fetchCertificate();
    }
  }, [params.id]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-red-600 font-bold mb-2">Error</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!certificateData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading certificate...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {certificateData.donationMethod === 'pickup' && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-center">
              <span className="font-semibold">Pickup Note:</span> Our volunteer will come to your address to collect the donated items. Thank you for your generous donation!
            </p>
            {certificateData.address && (
              <p className="text-blue-600 text-center mt-2 text-sm">
                Pickup Address: {certificateData.address}
              </p>
            )}
          </div>
        )}

        {certificateData.donationMethod === 'dropoff' && (
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

        <div data-certificate className="mb-8">
          <DonationCertificate
            donorName={certificateData.donorName}
            date={new Date(certificateData.date)}
            location={certificateData.location}
          />
        </div>
      </div>
    </div>
  );
}