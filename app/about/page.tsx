"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <main className="pt-24 pb-16">
      {/* Main About Section */}
      <section className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center "style={{ textDecoration: 'underline', textDecorationColor: 'red',textDecorationThickness: '3px' }}>About Infinite Smiles</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At Infinite Smiles, we believe in creating a world where no one goes without basic necessities. 
              Our mission is to bridge the gap between those who want to help and those in need, 
              facilitating the donation of food, clothes, and educational materials to communities across the nation.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Our Vision</h2>
            <p className="text-gray-700">
              We envision a future where every individual has access to basic necessities and educational 
              resources, fostering a society built on compassion, equality, and shared prosperity.
            </p>
          </div>
          <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl">
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
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ textDecoration: 'underline', textDecorationColor: 'red', textDecorationThickness: '3px' }}>Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6 transition-transform duration-300 hover:scale-105">
            <CardContent>
              {/* Modified for Compassion - increased size */}
              <div className="h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <Image
                  src="/compassion.jpg"
                  alt="Compassion"
                  width={96} // Increased width
                  height={96} // Increased height
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compassion</h3>
              <p className="text-gray-600">
                We lead with empathy and understanding, ensuring dignity in all our interactions.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 transition-transform duration-300 hover:scale-105">
            <CardContent>
              {/* Modified for Transparency - increased size */}
              <div className="h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <Image
                  src="/transparency.jpg"
                  alt="Transparency"
                  width={96}
                  height={96}
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-600">
                We maintain complete transparency in our operations and use of resources.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 transition-transform duration-300 hover:scale-105">
            <CardContent>
              {/* Modified for Impact - increased size */}
              <div className="h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <Image
                  src="/impact.jpg"
                  alt="Impact"
                  width={96}
                  height={96}
                  className="object-cover rounded-full"
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

      {/* NGO Connected Section with Hover Effect for Desktop and Click for Mobile */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ textDecoration: 'underline', textDecorationColor: 'red',textDecorationThickness: '3px' }}>Ngo Connected with us</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              image: "/images/team-1.jpg",
              name: "Welfare Organization",
              role: ""
            },
            {
              image: "/images/team-2.jpg",
              name: "Prayas",
              role: ""
            },
            {
              image: "/images/team-3.jpg",
              name: "Public Interest Foundation",
              role: ""
            },
            {
              image: "/images/team-4.jpg",
              name: "Goonj",
              role: ""
            }
          ].map((ngo, index) => (
            <Card 
              key={index} 
              className="relative h-72 overflow-hidden md:cursor-default cursor-pointer group"
              onClick={(e) => {
                // Only handle clicks on mobile devices
                if (window.innerWidth < 768) {
                  const element = document.getElementById(`ngo-overlay-${index}`);
                  if (element) {
                    const isActive = element.classList.contains('opacity-100');
                    // Remove active state from all overlays
                    document.querySelectorAll('[id^="ngo-overlay-"]').forEach(el => {
                      el.classList.remove('opacity-100');
                      el.classList.add('opacity-0');
                    });
                    // Toggle current overlay
                    if (!isActive) {
                      element.classList.remove('opacity-0');
                      element.classList.add('opacity-100');
                    }
                  }
                }
              }}
            >
              <Image
                src={ngo.image}
                alt={ngo.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Desktop: Hover effect, Mobile: Click effect */}
              <div 
                id={`ngo-overlay-${index}`}
                className="absolute inset-0 bg-black/50 opacity-0 md:group-hover:opacity-100 transition-all duration-300"
              >
                <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  <h3 className="font-semibold text-xl">{ngo.name}</h3>
                  {ngo.role && <p className="text-gray-200">{ngo.role}</p>}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}