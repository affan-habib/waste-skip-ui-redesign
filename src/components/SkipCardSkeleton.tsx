import React from 'react';

const SkipCardSkeleton = () => {
  return (
    <div className="bg-[var(--card-bg)] rounded-lg shadow-md p-6 w-full animate-pulse border border-[var(--card-border)]">
      <div className="rounded-md mb-4 w-full h-48 bg-[var(--card-border)]"></div>
      <h2 className="text-lg font-semibold mb-2 bg-[var(--card-border)] rounded-full h-6 w-3/4"></h2>
      <p className="mb-2 bg-[var(--card-border)] rounded-full h-4 w-1/2"></p>
      <p className="bg-[var(--card-border)] rounded-full h-8 w-1/4"></p>
    </div>
  );
};

export default SkipCardSkeleton;