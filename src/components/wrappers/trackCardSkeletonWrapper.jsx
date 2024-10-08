import React from 'react'
import HeadingWrapper from './headingWrapper'
import TrackCardSkeleton from '../analytics/trackCardSkeleton'
import Divider from '../layout/divider'

const TrackCardSkeletonWrapper = () => {
  return (
    <div>
      <HeadingWrapper
        heading={"Top Tracks"}
        desc={"Your top 5 most played tracks are below"}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {Array.from({ length: 5 }).map((track) => (
            <TrackCardSkeleton key={track} />
          ))}
        </div>
      </HeadingWrapper>
      <Divider />
    </div>
  )
}

export default TrackCardSkeletonWrapper