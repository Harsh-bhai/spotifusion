import VideoPlayer from '@/components/how-to-use/videoPlayer'
import React from 'react'

const HowToUse = () => {
  return (
    <div className="h-screen bg-base-200 flex pt-28 justify-center">
      <div className='flex flex-col items-center'>
        <h1 className="text-4xl font-bold mb-8 text-green-600">
            Demo Video
          </h1>
            <VideoPlayer
        src="/spotifusion demo.mp4"
        poster="/spotifusion thumnail.jpg"
        autoPlay={false}
        controls={true}
        loop={false}
            />
      </div>
  </div>
  )
}

export default HowToUse