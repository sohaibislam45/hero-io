import React from 'react';

const SkeletonCard = ({ keyIndex=0 }) => (
  <div key={keyIndex} className="card bg-base-100 md:w-96 w-full shadow-xl animate-pulse">
    <div className="px-10 pt-10">
      <div className="bg-gray-200 rounded-xl w-full h-56" />
    </div>

    <div className="card-body items-center text-center">
      <div className="h-6 w-3/4 bg-gray-200 rounded mb-4" />
      <div className="w-full flex justify-between mt-5">
        <div className="h-6 w-24 bg-gray-200 rounded" />
        <div className="h-6 w-20 bg-gray-200 rounded" />
      </div>
      <div className="h-3 w-full mt-3" /> {/* tiny spacer */}
    </div>
  </div>
);

const LoadingSpinner = ({ count = 8 }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-7 justify-items-center max-w-[1650px] mx-auto px-4'>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default LoadingSpinner;
