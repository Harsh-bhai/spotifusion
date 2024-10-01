"use client"
import PlaylistCard from '@/components/playlistCard'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrPlaylist } from '@/redux/slices/playlistSlice'

const Playlist = () => {
  const dispatch = useDispatch()
  const { playlists } = useSelector((state) => state.playlist)

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 lg:px-16">
      <h1 className="text-4xl font-bold mb-10 text-green-600">Your Playlists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            title={playlist.name}
            img={playlist.images[0]?.url || "/default-image.jpg"} // fallback if image is not available
            description={playlist.description || "No description available"}
            onClick={() => dispatch(setCurrPlaylist(playlist))}
          />
        ))}
      </div>
    </div>
  )
}

export default Playlist
