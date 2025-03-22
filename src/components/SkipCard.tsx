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
      className={`group bg-[var(--card-bg)] rounded-lg p-6 w-full transition-all duration-200 border cursor-pointer hover:border-[var(--accent)] ${
        selected ? 'border-[var(--accent)] border-2' : 'border-[var(--card-border)]'
      } hover:shadow`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-md mb-4">
        <Image
          src={`https://picsum.photos/300/200?random=${skip.id}`}
          alt="Skip"
          className="w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
          width={300}
          height={200}
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
      </div>
      <h2 className="text-lg font-semibold mb-2 text-[var(--foreground)]">{skip.size} Yard Skip</h2>
      <p className="text-[var(--foreground)] opacity-60 mb-2">{skip.hire_period_days} day hire period</p>
      <p className="text-2xl font-bold text-[var(--accent)]">
        £{skip.price_before_vat} <span className="text-sm text-[var(--foreground)] opacity-60">/ week</span>
      </p>
      <div className="flex gap-2 mt-2">
        {skip.allowed_on_road && (
          <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded">On Road</span>
        )}
        {skip.allows_heavy_waste && (
          <span className="px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded">Heavy Waste</span>
        )}
      </div>
    </div>
  );
};

export default SkipCard;
