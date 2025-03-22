"use client";

import React, { useState, useEffect } from 'react';
import SkipCard from '@/components/SkipCard';
import SkipCardSkeleton from '@/components/SkipCardSkeleton';
import Stepper from '@/components/Stepper';
import { FaMapMarkerAlt, FaRecycle, FaTruck, FaFileAlt, FaCalendarAlt, FaMoneyBillAlt } from 'react-icons/fa';
import useSkips from '@/hooks/useSkips';
import Skip from '@/types/skip';
import { toast } from 'sonner';

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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Scrolling up or near top
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleStepClick = (index: number) => {
    if (index !== 2) {
      toast.info("This step is not available right now");
      return;
    }
  };

  return (
    <div className="min-h-screen">
      <header>
        <Stepper steps={steps} currentStep={2} onStepClick={handleStepClick} isVisible={isVisible} />
      </header>
      <main className="container mx-auto px-4 pt-32 pb-24 max-w-7xl">
        <h1 className="text-3xl font-bold text-center text-[var(--foreground)]">Choose Your Skip Size</h1>
        <p className="text-lg mb-8 text-center text-[var(--foreground)] opacity-80">Select the skip size that best suits your needs</p>
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <SkipCardSkeleton key={index} />
            ))}
          </div>
        )}
        {error && <div className="text-red-600 dark:text-red-400 text-center">Error: {error}</div>}
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
        <footer className="bg-[var(--card-bg)] py-4 fixed bottom-0 left-0 w-full border-t border-[var(--card-border)]">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div>
              <div key={selectedSkip.id}>
                <p className="text-[var(--foreground)]">
                  {selectedSkip.size} Yard Skip - £{selectedSkip.price_before_vat}
                </p>
              </div>
            </div>
            <div>
              <button
                className="bg-[var(--card-border)] hover:bg-[var(--card-bg)] text-[var(--foreground)] py-2 px-4 rounded-lg mr-4 transition-colors"
                onClick={() => setSelectedSkip(null)}
              >
                Cancel
              </button>
              <button 
                className="bg-[var(--accent)] hover:opacity-90 text-white py-2 px-4 rounded-lg transition-colors"
                onClick={() => toast.info("This step is not available right now")}
              >
                Continue
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
