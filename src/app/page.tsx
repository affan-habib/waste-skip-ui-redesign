"use client";

import React, { useState } from 'react';
import SkipCard from '@/components/SkipCard';
import SkipCardSkeleton from '@/components/SkipCardSkeleton';
import Stepper from '@/components/Stepper';
import { FaMapMarkerAlt, FaRecycle, FaTruck, FaFileAlt, FaCalendarAlt, FaMoneyBillAlt } from 'react-icons/fa';
import useSkips from '@/hooks/useSkips';
import Skip from '@/types/skip';

const steps = [
  { label: 'Postcode', icon: FaMapMarkerAlt },
  { label: 'Waste Type', icon: FaRecycle },
  { label: 'Select Skip', icon: FaTruck },
  { label: 'Permit Check', icon: FaFileAlt },
  { label: 'Choose Date', icon: FaCalendarAlt },
  { label: 'Payment', icon: FaMoneyBillAlt },
];

export default function Home() {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [skipData, isLoading, error] = useSkips();

  return (
    <div className="bg-gray-100 min-h-screen dark:bg-gray-900">
      <header className="bg-white py-4 border-b border-gray-800 fixed top-0 left-0 right-0 w-full z-10  dark:bg-gray-900">
        <div>
          {/* Stepper */}
          <Stepper steps={steps} currentStep={2} />
        </div>
      </header>
      <main className="container mx-auto px-4 py-30 max-w-7xl">
        <h1 className="text-3xl font-bold text-center dark:text-white">Choose Your Skip Size</h1>
        <p className="text-lg mb-8 text-center dark:text-gray-300">Select the skip size that best suits your needs</p>
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <SkipCardSkeleton key={index} />
            ))}
          </div>
        )}
        {error && <div>Error: {error}</div>}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skipData.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                selected={selectedSkip?.id === skip.id}
                onClick={() => setSelectedSkip(skip)}
              />
            ))}
          </div>
        )}
      </main>
      {selectedSkip !== null && (
        <footer className="bg-gray-800 py-4 fixed bottom-0 left-0 w-full">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div>
              <div key={selectedSkip.id}>
                <p className="text-white">
                  {selectedSkip.size} Yard Skip - £{selectedSkip.price_before_vat}
                </p>
              </div>
            </div>
            <div>
              <button
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg mr-4"
                onClick={() => setSelectedSkip(null)}
              >
                Cancel
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">Continue</button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
