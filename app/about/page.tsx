"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <main className="pt-24 pb-16">
      {/* Main About Section */}
      <section className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About NGO Donation</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At NGO Donation, we believe in creating a world where no one goes without basic necessities. 
              Our mission is to bridge the gap between those who want to help and those in need, 
              facilitating the donation of food, clothes, and educational materials to communities across the nation.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Our Vision</h2>
            <p className="text-gray-700">
              We envision a future where every individual has access to basic necessities and educational 
              resources, fostering a society built on compassion, equality, and shared prosperity.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/about-mission.jpg"
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/heart-icon.svg"
                    alt="Compassion"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Compassion</h3>
                <p className="text-gray-600">
                  We lead with empathy and understanding, ensuring dignity in all our interactions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/transparency-icon.svg"
                    alt="Transparency"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-gray-600">
                  We maintain complete transparency in our operations and use of resources.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/impact-icon.svg"
                    alt="Impact"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Impact</h3>
                <p className="text-gray-600">
                  We focus on creating lasting, meaningful change in communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="text-center overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/team-1.jpg"
                alt="Team Member"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <h3 className="font-semibold">Sarah Johnson</h3>
              <p className="text-sm text-gray-600">Executive Director</p>
            </CardContent>
          </Card>

          <Card className="text-center overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/team-2.jpg"
                alt="Team Member"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <h3 className="font-semibold">Michael Chen</h3>
              <p className="text-sm text-gray-600">Operations Manager</p>
            </CardContent>
          </Card>

          <Card className="text-center overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/team-3.jpg"
                alt="Team Member"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <h3 className="font-semibold">Priya Patel</h3>
              <p className="text-sm text-gray-600">Community Outreach</p>
            </CardContent>
          </Card>

          <Card className="text-center overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/team-4.jpg"
                alt="Team Member"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <h3 className="font-semibold">David Wilson</h3>
              <p className="text-sm text-gray-600">Program Coordinator</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}