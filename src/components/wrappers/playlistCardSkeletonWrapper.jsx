import React from 'react'
import PlaylistCardSkeleton from '../playlists/playlistCardSkeleton'

const PlaylistCardSkeletonWrapper = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 lg:px-16">
      <h1 className="text-4xl font-bold mb-10 text-green-600">
        Your Playlists
      </h1>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {Array.from({ length: 8 }).map((index) => (
          <PlaylistCardSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}

export default PlaylistCardSkeletonWrapper