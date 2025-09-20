"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="NGO Donation Logo"
            width={80}
            height={50}
            className="mr-3"
          />
          {/* <span className="font-bold text-xl text-blue-600">NGO Donation</span> */}
        </Link>

        {/* Navigation links and button on the right */}
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Contact Us
          </Link>
          <Link href="/donate">
            <Button className="bg-red-600 hover:bg-red-700">
              Donate Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;