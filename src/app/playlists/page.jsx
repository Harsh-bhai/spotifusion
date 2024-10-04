"use client";
import PlaylistCard from "@/components/playlists/playlistCard";
import React from "react";
import { useRouter } from "next/navigation";
import { usePlaylistStore } from "@/store/usePlaylistStore";
import PlaylistCardSkeletonWrapper from "@/components/wrappers/playlistCardSkeletonWrapper";

const Playlist = () => {
  const { playlists, setCurrPlaylist } = usePlaylistStore();
  const router = useRouter();
  // console.log(playlists);

  return (
    <div>
      {playlists.length === 0 ? <PlaylistCardSkeletonWrapper /> : <div className="min-h-screen flex flex-col items-center py-12 px-4 lg:px-16">
        <h1 className="text-4xl font-bold mb-4 text-green-600">
          Your Playlists
        </h1>
        <p className="mb-10">Select a playlist to modify</p>
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
          {playlists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              title={playlist.name}
              img={playlist.images[0]?.url || "/default-image.jpg"} // fallback if image is not available
              description={playlist.description || "No description available"}
              onClick={() => {
                setCurrPlaylist(playlist);
                router.push("/add-tag");
              }}
            />
          ))}
        </div>
      </div>}
    </div>
  );
};

export default Playlist;
