import React from "react";

const TrackCardSkeleton = () => {
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

      </div>
    </div>
  );
};

export default TrackCardSkeleton;
