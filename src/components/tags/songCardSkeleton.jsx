import React from "react";

const SongCardSkeleton = () => {
  return (
    <div className="flex items-start space-x-4 p-4 bg-base-100 rounded-lg shadow-lg animate-pulse">
      {/* Song Image Skeleton */}
      <div className="w-16 h-16 bg-gray-300 rounded-md"></div>

      {/* Song Details Skeleton */}
      <div className="flex flex-col space-y-2">
        {/* Song Name Skeleton */}
        <div className="w-40 h-4 bg-gray-300 rounded"></div>

        {/* Artists Skeleton */}
        <div className="w-24 h-4 bg-gray-300 rounded"></div>

        {/* Tags Skeleton */}
        <div className="flex flex-wrap justify-start items-center mt-2 space-x-2">
          <div className="w-10 h-6 mt-4 bg-gray-300 rounded"></div>
          <div className="w-16 h-6 mt-4 bg-gray-300 rounded"></div>
          <div className="w-12 h-6 mt-4 bg-gray-300 rounded"></div>
          <div className="w-14 h-6 mt-4 bg-gray-300 rounded"></div>
          {/* Add Tag Icon Skeleton */}
          <div className="w-6 h-6 mt-4 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SongCardSkeleton;
