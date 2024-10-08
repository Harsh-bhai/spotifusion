import React from 'react'
import HeadingWrapper from './headingWrapper'
import PlaylistCardSkeleton from '../playlists/playlistCardSkeleton'
import Divider from '../layout/divider'

const ArtistCardSkeletonWrapper = () => {
  return (
    <div>
      <HeadingWrapper
        heading={"Top Artists"}
        desc={"Your top 8 most played artists are below"}
      >
        <div className="grid  place-items-center justify-between items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-28 w-full max-w-7xl mx-auto">
          {Array.from({ length: 8 }).map((artist) => (
            <PlaylistCardSkeleton key={artist} />
          ))}
        </div>
      </HeadingWrapper>
      <Divider />
    </div>
  )
}

export default ArtistCardSkeletonWrapper