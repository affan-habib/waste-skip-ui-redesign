import React from 'react';
import Image from 'next/image';

interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string | null;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

interface SkipCardProps {
  skip: Skip;
  selected: boolean;
  onClick: () => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, selected, onClick }) => {
  return (
    <div
      className={`bg-gray-800 rounded-lg shadow-md p-6 w-full ${selected ? 'border-blue-500 border-2' : 'border-transparent'
        } transition-colors duration-200 border cursor-pointer`}
      onClick={onClick}
    >
      <Image
        src={`https://picsum.photos/300/200?random=${skip.id}`}
        alt="Skip"
        className="rounded-md mb-4 w-full"
        width={300}
        height={200}
        style={{ objectFit: 'cover' }}
      />
      <h2 className="text-lg font-semibold mb-2">{skip.size} Yard Skip</h2>
      <p className="text-gray-400 mb-2">14 day hire period</p>
      <p className="text-2xl font-bold">
        £{skip.price_before_vat} <span className="text-sm">/ week</span>
      </p>
    </div>
  );
};

export default SkipCard;