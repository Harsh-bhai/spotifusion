import React from 'react'
import Image from 'next/image'

const PlaylistCard = ({ title, img, description, onClick }) => {
  return (
    <div onClick={onClick}
      className="group card card-compact card-bordered bg-base-100 w-72 shadow-lg hover:shadow-[0_0_15px_5px_rgba(34,197,94,0.7)] 
                 hover:scale-105 transition-all transform duration-300"
    >
      <figure>
        <Image
          src={img}
          alt="playlist"
          width={300} height={300}
          className="rounded-lg"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="group-hover:text-green-300 card-title text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
      </div>
    </div>
  )
}

export default PlaylistCard
