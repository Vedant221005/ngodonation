"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ClothesDonationPage() {
  const router = useRouter();
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        fullName: formData.get("fullName"),
        contactNumber: formData.get("contactNumber"),
        clothingType: formData.get("clothingType"),
        numberOfItems: Number(formData.get("numberOfItems")),
        donationDate: formData.get("donationDate"),
        deliveryMethod: formData.get("deliveryMethod"),
        address: formData.get("address") || "",
        additionalNotes: formData.get("additionalNotes") || ""
      };

      const response = await fetch("/api/donations/clothes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit donation");
      }

      alert("Clothes donation submitted successfully!");
      router.push("/donate"); // Redirect to donation categories page
    } catch (err) {
      setError("Failed to submit donation. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Clothes <span className="text-red-600">Donation</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your clothing donations help provide warmth and dignity to those in need.
          </p>
        </section>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Donation Form */}
          <Card className="p-6 border-red-100">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Donation Details</h2>
              {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    name="fullName"
                    type="text"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                  <input
                    name="contactNumber"
                    type="tel"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter your contact number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type of Clothing *</label>
                  <select 
                    name="clothingType"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">Select clothing type</option>
                    <option value="children">Children's Wear</option>
                    <option value="winter">Winter Clothing</option>
                    <option value="professional">Professional Attire</option>
                    <option value="casual">Casual Wear</option>
                    <option value="shoes">Shoes</option>
                    <option value="accessories">Accessories</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Items *</label>
                  <input
                    name="numberOfItems"
                    type="number"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter number of items"
                    min="1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Donation *</label>
                  <input
                    name="donationDate"
                    type="date"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Method *</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="pickup"
                        className="mr-2"
                        required
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                        checked={deliveryMethod === "pickup"}
                      />
                      Pickup
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="dropoff"
                        className="mr-2"
                        onChange={(e) => setDeliveryMethod(e.target.value)}
                        checked={deliveryMethod === "dropoff"}
                      />
                      Drop-off
                    </label>
                  </div>
                </div>
                {deliveryMethod === "pickup" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pickup Address *
                    </label>
                    <textarea
                      name="address"
                      required
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                      rows={3}
                      placeholder="Enter your complete address for pickup"
                    ></textarea>
                  </div>
                )}
                {deliveryMethod === "dropoff" && (
                  <div>
                    <p className="text-sm text-gray-600 p-4 bg-gray-50 rounded-md border border-gray-200">
                      Our drop-off location details will be sent to you after form submission.
                    </p>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                  <textarea
                    name="additionalNotes"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    rows={3}
                    placeholder="Any special instructions, sizes, or additional information"
                  ></textarea>
                </div>
                <p className="text-sm text-gray-500">* Required fields</p>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white disabled:bg-gray-400"
                >
                  {isSubmitting ? "Submitting..." : "Submit Clothes Donation"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right Column - Guidelines */}
          <div className="space-y-6">
            <Card className="border-red-100">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">Guidelines</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    All items should be clean and gently used
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Check for any tears or damages
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Sort items by size and type if possible
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Pack in clean bags or boxes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-100 bg-red-50">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Impact</h2>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-red-600">5,000+</p>
                    <p className="text-sm text-gray-600">Families Clothed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-600">20,000+</p>
                    <p className="text-sm text-gray-600">Items Distributed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}