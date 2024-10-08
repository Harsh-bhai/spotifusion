import React from 'react'
import HeadingWrapper from './headingWrapper'
import TrackCardSkeleton from '../analytics/trackCardSkeleton'
import Divider from '../layout/divider'

const GetRecomWrapper = () => {
  return (
    <div>
      <HeadingWrapper
        heading={"Get Recomendations"}
        desc={"Songs based on your top artists are below"}
        btnText={"Create Playlist"}
        setState={() => setReload(reload + 1)} // Refreshes on click
        onClick={(e) => {}}
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
        >
          {Array.from({ length: 15 })?.map((track) => (
            <TrackCardSkeleton key={track} />
          ))}
        </div>
      </HeadingWrapper>
      <Divider />
    </div>
  )
}

export default GetRecomWrapper