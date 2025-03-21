import React from 'react';
import Stepper from '../components/Stepper';
import { FaMapMarkerAlt, FaRecycle, FaTruck, FaFileAlt, FaCalendarAlt, FaMoneyBillAlt } from 'react-icons/fa';

const steps = [
  { label: 'Postcode', icon: FaMapMarkerAlt },
  { label: 'Waste Type', icon: FaRecycle },
  { label: 'Select Skip', icon: FaTruck },
  { label: 'Permit Check', icon: FaFileAlt },
  { label: 'Choose Date', icon: FaCalendarAlt },
  { label: 'Payment', icon: FaMoneyBillAlt },
];

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen dark:bg-gray-900">
      <header className="bg-white py-4 shadow-md fixed top-0 left-0 w-full z-10 rounded-b-lg dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Stepper */}
          <Stepper steps={steps} currentStep={0} />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 mt-20 dark:text-white">
      </main>
    </div>
  );
}
