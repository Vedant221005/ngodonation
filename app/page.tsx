"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-between text-black px-8 md:px-16">
        <div className="flex-1 pr-8">
          <h1 className="text-6xl font-bold mb-4">
            Together We Can<br />
            Make<br />
            <span className="text-red-600">a Difference</span>
          </h1>
          <p className="text-lg mb-8 max-w-xl">
            Join our mission to provide food, clothes, and books to those in need. Every donation creates ripples of hope in our community.
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8"
            >
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8"
            >
              Learn More
            </Button>
          </div>
          <div className="flex justify-between mt-16 max-w-xl">
            <div>
              <p className="text-2xl font-bold text-red-600 text-center">5,000+</p>
              <p className="text-sm font-bold">Families helped</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-red-600 text-center">15,000+</p>
              <p className="text-sm font-bold">Meals provided</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-red-600 text-center">2,500+</p>
              <p className="text-sm font-bold">Books Donated</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/hero_image.jpg"
            alt="hero image"
            width={500}
            height={500}
            className="object-contain rounded-2xl shadow-lg"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-red-50 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-900">
          About <span className="text-red-600">Us</span>
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          We are a non-profit organization helping connect donors with people in
          need. Our mission is to spread kindness through food, clothing, and
          education.
        </p>
        <Link href="/about">
          <Button variant="outline" className="mt-8 border-red-600 text-red-600 hover:bg-red-50 cursor-pointer">
            Learn More About Our Mission
          </Button>
        </Link>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-semibold mb-12 text-gray-900">
          What People <span className="text-red-600">Say</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <Card className="hover:shadow-lg transition-shadow border-red-100">
            <CardHeader className="bg-red-50/50">
              <CardTitle className="flex items-center gap-2">
                <span className="text-red-600 text-2xl">❝</span>
                <span className="text-gray-900">Anjali</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600">"This NGO changed lives in our community!"</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-red-100">
            <CardHeader className="bg-red-50/50">
              <CardTitle className="flex items-center gap-2">
                <span className="text-red-600 text-2xl">❝</span>
                <span className="text-gray-900">Rohan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600">"Very transparent and impactful."</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-red-100">
            <CardHeader className="bg-red-50/50">
              <CardTitle className="flex items-center gap-2">
                <span className="text-red-600 text-2xl">❝</span>
                <span className="text-gray-900">Priya</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600">"Happy to donate books for underprivileged kids."</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-red-50 text-center">
        <h2 className="text-4xl font-semibold mb-12 text-gray-900">
          Our <span className="text-red-600">Gallery</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-red-100">
            <Image
              src="/images/donation1.jpg"
              alt="Donation 1"
              width={400}
              height={300}
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </Card>
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-red-100">
            <Image
              src="/images/donation2.jpg"
              alt="Donation 2"
              width={400}
              height={300}
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </Card>
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-red-100">
            <Image
              src="/images/donation3.jpg"
              alt="Donation 3"
              width={400}
              height={300}
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </Card>
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-red-100">
            <Image
              src="/images/donation4.jpg"
              alt="Donation 4"
              width={400}
              height={300}
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </Card>
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-red-100">
            <Image
              src="/images/donation5.jpg"
              alt="Donation 5"
              width={400}
              height={300}
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </Card>
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-red-100">
            <Image
              src="/images/donation6.jpg"
              alt="Donation 6"
              width={400}
              height={300}
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </Card>
        </div>
        <Button variant="outline" className="mt-12 border-red-600 text-red-600 hover:bg-red-50">
          View More Photos
        </Button>
      </section>
    </main>
  );
}
