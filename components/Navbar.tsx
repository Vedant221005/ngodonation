"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
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
            <Button className="bg-red-600 hover:bg-red-700 cursor-pointer">
              Donate Now
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <Link href="/donate">
            <Button className="bg-red-600 hover:bg-red-700 cursor-pointer">
              Donate Now
            </Button>
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-600 focus:outline-none"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Off-canvas menu for mobile */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center h-16 px-4 border-b">
          <span className="font-bold text-lg text-blue-600">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 focus:outline-none"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-4">
          <Link
            href="/"
            className="py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Overlay to close the menu when clicked outside */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;