"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DonatePage() {
  const donationCategories = [
    {
      title: "Food Donation",
      description:
        "Provide meals and groceries to families in need. Your food donations help fight hunger in our community.",
      icon: "/food_icon.jpg",
      items: ["Non-perishable foods", "Fresh produce", "Baby food", "Water"],
      href: "/donate/food",
    },
    {
      title: "Clothes Donation",
      description:
        "Give gently used or new clothing to help families stay warm and dignified. All sizes and seasons accepted.",
      icon: "/clothes_icon.jpg",
      items: ["Children's wear", "Winter clothing", "Professional attire", "Shoes"],
      href: "/donate/clothes",
    },
    {
      title: "Book Donation",
      description:
        "Share the gift of knowledge. Your book donations support education, literacy programs and open doors to brighter futures.",
      icon: "/books_icon.jpg",
      items: ["Textbooks", "Children's books", "Educational materials", "Novels"],
      href: "/donate/books",
    },
  ];

  return (
    <main className="pt-24 pb-16">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Choose Your <span className="text-red-600">Donation</span> Category
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Every donation makes a difference. Select a category below to learn more
          about what items we accept and how your donation helps our community.
        </p>
      </section>

      {/* Donation Categories */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {donationCategories.map((category) => (
            <div key={category.title} className="flex flex-col space-y-4">
              <Card
                className="relative group hover:shadow-xl transition-shadow border-red-100"
              >
                <CardContent className="p-6">
                  <div className="mb-6">
                    <Image
                      src={category.icon}
                      alt={category.title}
                      width={200}
                      height={80}
                      className="mx-auto"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 text-center ">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 mb-4 ">{category.description}</p>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-gray-900">
                      Accepted Items:
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {category.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 rounded-lg transition-colors duration-300" />
              </Card>
              
              {/* Donate Button */}
              <a 
                href={category.href}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  Donate {category.title.split(" ")[0]}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="container mx-auto px-4 mt-16">
        <Card className="bg-red-50 border-red-100">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              How Your Donation Helps
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-red-600 mb-2">Food Donations</h3>
                <p className="text-gray-600">
                  Provide essential nutrition to families and help fight hunger in
                  our community.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 mb-2">
                  Clothes Donations
                </h3>
                <p className="text-gray-600">
                  Help families maintain dignity and stay protected in all weather
                  conditions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 mb-2">Book Donations</h3>
                <p className="text-gray-600">
                  Support education and promote literacy among children and adults
                  alike.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
