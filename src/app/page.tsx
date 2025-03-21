"use client";

import React, { useState } from 'react';
import SkipCard from '@/components/SkipCard';
import Stepper from '@/components/Stepper';
import { FaMapMarkerAlt, FaRecycle, FaTruck, FaFileAlt, FaCalendarAlt, FaMoneyBillAlt } from 'react-icons/fa';
import useSkips from '@/hooks/useSkips';

const steps = [
  { label: 'Postcode', icon: FaMapMarkerAlt },
  { label: 'Waste Type', icon: FaRecycle },
  { label: 'Select Skip', icon: FaTruck },
  { label: 'Permit Check', icon: FaFileAlt },
  { label: 'Choose Date', icon: FaCalendarAlt },
  { label: 'Payment', icon: FaMoneyBillAlt },
];

export default function Home() {
  const [selectedSkip, setSelectedSkip] = useState<number | null>(null);
  const [skipData, isLoading, error] = useSkips();

  return (
    <div className="bg-gray-100 min-h-screen dark:bg-gray-900">
      <header className="bg-white py-4 shadow-md fixed top-0 left-0 w-full z-10 rounded-b-lg dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Stepper */}
          <Stepper steps={steps} currentStep={0} />
        </div>
      </header>
      <main className="container mx-auto px-4 py-30">
        {isLoading && <div>Loading skips...</div>}
        {error && <div>Error: {error}</div>}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skipData.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                selected={selectedSkip === skip.id}
                onClick={() => setSelectedSkip(skip.id)}
              />
            ))}
          </div>
        )}
      </main>
      {selectedSkip !== null && (
        <footer className="bg-gray-800 py-4 fixed bottom-0 left-0 w-full">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div>
              {skipData
                .filter((skip) => skip.id === selectedSkip)
                .map((skip) => (
                  <div key={skip.id}>
                    <p className="text-white">
                      {skip.size} Yard Skip - £{skip.price_before_vat}
                    </p>
                  </div>
                ))}
            </div>
            <div>
              <button
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-4"
                onClick={() => setSelectedSkip(null)}
              >
                Cancel
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Continue</button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
