import React from "react";
import SongCardSkeleton from "../tags/songCardSkeleton";

const SongCardSkeletonWrapper = () => {
  return (
    <div className="min-h-screen flex flex-col py-12 px-4 lg:px-10">
      <h1 className="text-4xl font-bold mb-10 text-green-600">
        
      </h1>
      <p className="mb-10"></p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {Array.from({ length: 15 }).map((_, index) => (
          <SongCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default SongCardSkeletonWrapper;
