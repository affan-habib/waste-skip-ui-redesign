import React from 'react';

const SkipCardSkeleton = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 w-full animate-pulse">
      <div className="rounded-md mb-4 w-full h-48 bg-gray-700"></div>
      <h2 className="text-lg font-semibold mb-2 text-gray-500 bg-gray-700 rounded-full h-6 w-3/4"></h2>
      <p className="text-gray-600 mb-2 bg-gray-700 rounded-full h-4 w-1/2"></p>
      <p className="text-2xl font-bold text-gray-500 bg-gray-700 rounded-full h-8 w-1/4"></p>
    </div>
  );
};

export default SkipCardSkeleton;