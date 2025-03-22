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
      className={`bg-[var(--card-bg)] rounded-lg shadow-md p-6 w-full ${
        selected ? 'border-[var(--accent)] border-2' : 'border-[var(--card-border)]'
      } transition-colors duration-200 border cursor-pointer hover:border-[var(--accent)]`}
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
      <h2 className="text-lg font-semibold mb-2 text-[var(--foreground)]">{skip.size} Yard Skip</h2>
      <p className="text-[var(--foreground)] opacity-60 mb-2">14 day hire period</p>
      <p className="text-2xl font-bold text-[var(--foreground)]">
        £{skip.price_before_vat} <span className="text-sm text-[var(--foreground)] opacity-60">/ week</span>
      </p>
    </div>
  );
};

export default SkipCard;