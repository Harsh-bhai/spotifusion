import React from 'react';

const PlaylistCardSkeleton = () => {
  return (
    <div className="animate-pulse card card-compact card-bordered bg-base-100 w-72 shadow-lg">
      {/* Image Skeleton */}
      <div className="bg-gray-300 rounded-lg h-72 w-full"></div>

      {/* Text Skeleton */}
      <div className="card-body p-4 space-y-2">
        {/* Title Skeleton */}
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        {/* Description Skeleton */}
        <div className="space-y-1">
          <div className="h-3 bg-gray-300 rounded w-full"></div>
          <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCardSkeleton;
