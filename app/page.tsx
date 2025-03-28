"use client";

import { useState } from "react";
import { Cross, Star, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);

    // Simulated API call - replace with actual backend integration
    setTimeout(() => {
      setOtp("638138");
      setIsVerifying(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-amber-50">
      {/* Decorative Background */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAzMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptLTE4LTE1YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiIgc3Ryb2tlPSIjZmRiYWE1IiBzdHJva2Utb3BhY2l0eT0iLjUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-10 pointer-events-none"></div>

      <div className="relative">
        {/* Header Section */}
        <div className="container mx-auto px-4 pt-6 md:pt-8">
          <div className="flex items-center justify-between max-w-xl mx-auto">
            <div className="w-24 h-24 md:w-32 md:h-32 relative">
              <Image
                src="/images/chetid.png"
                alt="Image 1"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 relative">
              <Image
                src="/images/chetib.jpg"
                alt="Image 2"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 relative">
              <Image
                src="/images/chetic.png"
                alt="Image 3"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>

          <div className="text-center mt-6 md:mt-8">
            <p className="text-xl md:text-3xl font-serif italic text-red-800 drop-shadow-sm">
              Invites you to celebrate
            </p>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mt-8 md:mt-12">
          <Image
            src="/images/chetia.png"
            width={300}
            height={100}
            alt="Cheti Chand Jo Melo"
            className="w-full max-w-lg mx-auto"
          />
        </div>

        {/* Event Details */}
        <div className="container mx-auto px-4 mt-8 md:mt-12">
          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-4 md:p-6 rounded-xl text-center max-w-2xl mx-auto shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-5 h-5" />
              <p className="text-lg md:text-2xl font-semibold">
                29th March, 2025 | 6.30 pm onwards
              </p>
            </div>
          </div>

          <div className="text-center mt-6 md:mt-8">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5 text-gray-700" />
              <p className="text-lg md:text-2xl font-bold text-gray-800">
                VENUE: PODIUM LEVEL, THE WALK,
                <br className="md:hidden" /> HIRANANDANI ESTATE, THANE (W)
              </p>
            </div>
          </div>
        </div>

        {/* Verification Section */}
        <div className="container mx-auto px-4 mt-8 md:mt-12">
          <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8">
            <form onSubmit={handleVerification} className="space-y-4">
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-gray-700 font-medium text-lg"
                >
                  Enter Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  pattern="[0-9]{10}"
                  required
                  className="mt-2 block w-full rounded-lg border-2 border-gray-200 px-4 py-3 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="10 digit mobile number"
                />
              </div>
              <button
                type="submit"
                disabled={isVerifying}
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors disabled:bg-red-400 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                {isVerifying ? "Verifying..." : "Verify Number"}
              </button>
            </form>

            {otp && (
              <div className="mt-6 p-6 bg-green-50 rounded-lg border-2 border-green-100">
                <p className="text-green-800 font-medium">
                  Your verification code:
                </p>
                <p className="text-3xl font-bold text-green-600 tracking-wide mt-2">
                  {otp}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* QR Code Section */}
        <div className="container mx-auto px-4 mt-8 md:mt-12 mb-16">
          <div className="text-center">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border-2 border-gray-100">
                <p className="text-gray-600 font-medium">QR Code Placeholder</p>
              </div>
            </div>
            <p className="mt-4 text-lg md:text-xl font-bold text-red-600 animate-pulse">
              SCAN HERE TO AVAIL FREE PASS
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
