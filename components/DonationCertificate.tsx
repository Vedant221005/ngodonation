"use client";

import Image from "next/image";
import { format } from "date-fns";

interface DonationCertificateProps {
  donorName: string;
  date: Date;
  location?: string;
}

export default function DonationCertificate({
  donorName,
  date,
  location = "Pune, India",
}: DonationCertificateProps) {
  return (
    <div data-certificate className="w-full max-w-[900px] min-h-[500px] sm:aspect-[4/3] bg-red-50 relative p-4 sm:p-6 md:p-10 mx-auto shadow-2xl rounded-2xl border-4 border-red-200">
      {/* Logo */}
      <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2">
        <Image
          src="/logo.jpg"
          alt="Infinite Smiles Logo"
          width={70}
          height={70}
          className="rounded-full border-4 border-white shadow-md sm:w-[90px] sm:h-[90px]"
          priority
        />
      </div>

      {/* Certificate Content */}
      <div className="text-center pt-8 sm:pt-12 md:pt-16 px-2 sm:px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-1 sm:mb-2 text-gray-900 tracking-wide">
          CERTIFICATE
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-6 sm:mb-10 tracking-wider">
          OF DONATION
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-red-600 italic mb-3 sm:mb-4">
          This Certificate is Proudly Presented To
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-6 sm:mb-10 break-words px-2">
          {donorName}
        </h2>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-gray-700 mb-8 sm:mb-12 px-2">
          For your kind and valuable donation.  
          We deeply appreciate your contribution and the positive impact you have made.
        </p>

        {/* Footer Section */}
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 w-full px-2 sm:px-8">
          <div className="grid grid-cols-3 items-end gap-2 sm:gap-4">
            {/* Date & Location */}
            <div className="text-left text-xs sm:text-sm md:text-base text-gray-700">
              <p>{format(date, "dd MMMM yyyy")}</p>
              <p className="text-xs sm:text-sm">{location}</p>
            </div>

            {/* Medal */}
            <div className="flex justify-center">
              <Image
                src="/medal.jpg"
                alt="Certificate Medal"
                width={80}
                height={100}
                className="w-[60px] h-[75px] sm:w-[100px] sm:h-[125px] md:w-[120px] md:h-[150px]"
              />
            </div>

            {/* Signature */}
            <div className="text-right pr-10">
              <p className="text-xs sm:text-sm md:text-base font-medium pr-2 sm:pr-4">Head of The NGO</p>
              <Image
                src="/sign.jpg"
                alt="Signature of Vedant Rane"
                width={128}
                height={48}
                className="h-8 w-24 sm:h-10 sm:w-28 md:h-12 md:w-32 mb-1 ml-auto pr-2 sm:pr-5"
              />
              {/* <div className="h-[1px] sm:h-[2px] w-28 sm:w-36 md:w-40 bg-black mb-1 ml-auto" /> */}
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 pr-19 sm:pr-17">XYZ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
