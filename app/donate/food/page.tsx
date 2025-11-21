"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function FoodDonationPage() {
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
        foodType: formData.get("foodType"),
        quantity: Number(formData.get("quantity")),
        donationDate: formData.get("donationDate"),
        deliveryMethod: formData.get("deliveryMethod"),
        address: formData.get("address") || "",
        additionalNotes: formData.get("additionalNotes") || ""
      };

      const response = await fetch("/api/donations/food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit donation");
      }
      
      const result = await response.json();
      if (result.success && result.donationId) {
        const params = new URLSearchParams({
          fullName: data.fullName as string,
          method: data.deliveryMethod as string,
          ...(data.address && { address: data.address as string })
        });
        router.push(`/certificate?id=${result.donationId}&${params.toString()}`);
      } else {
        throw new Error("Failed to get donation ID");
      }
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
            Food <span className="text-red-600">Donation</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help us fight hunger in our community. Your food donations directly support families in need.
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
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter 10-digit contact number"
                    onInput={(e) => {
                      const target = e.target as HTMLInputElement;
                      target.value = target.value.replace(/[^0-9]/g, '').slice(0, 10);
                    }}
                  />
                  <p className="text-xs text-gray-500 mt-1">Must be exactly 10 digits</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type of Food *</label>
                  <select 
                    name="foodType"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <option value="">Select food type</option>
                    <option value="non-perishable">Non-perishable Foods</option>
                    <option value="fresh-produce">Fresh Produce</option>
                    <option value="baby-food">Baby Food</option>
                    <option value="canned-goods">Canned Goods</option>
                    <option value="water">Water</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity (in kg/items) *</label>
                  <input
                    name="quantity"
                    type="number"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter quantity"
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
                    placeholder="Any special instructions or additional information"
                  ></textarea>
                </div>
                <p className="text-sm text-gray-500">* Required fields</p>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white disabled:bg-gray-400"
                >
                  {isSubmitting ? "Submitting..." : "Submit Food Donation"}
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
                    Ensure all food items are within their expiration date
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Package items securely to prevent damage
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Non-perishable items should be unopened
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Fresh produce should be clean and undamaged
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-100 bg-red-50">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Impact</h2>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-red-600">15,000+</p>
                    <p className="text-sm text-gray-600">Meals Provided</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-600">1,000+</p>
                    <p className="text-sm text-gray-600">Families Fed Monthly</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-100 bg-blue-50">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-3 text-gray-900">Daily Food Supply from Hotels</h2>
                <p className="text-sm text-gray-700 mb-3">
                  If you are a hotel or restaurant and would like to provide daily food supply, please contact us:
                </p>
                <div className="bg-white p-3 rounded-md border border-gray-200">
                  <p className="text-base font-semibold ">📞 9876543210</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}