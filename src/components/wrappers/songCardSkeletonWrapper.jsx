import React from "react";
import SongCardSkeleton from "../tags/songCardSkeleton";

const SongCardSkeletonWrapper = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-center">
      {Array.from({ length: 15 }).map((_, index) => (
        <SongCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default SongCardSkeletonWrapper;
