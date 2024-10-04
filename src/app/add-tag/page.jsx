"use client";
import React, { useEffect, useState } from "react";
import UseSpotify from "@/hooks/useSpotify";
import SongCard from "@/components/tags/songCard";
import { usePlaylistStore } from "@/store/usePlaylistStore";
import SongCardSkeletonWrapper from "@/components/wrappers/songCardSkeletonWrapper";

const AddTag = () => {
  const spotifyApi = UseSpotify();
  const { currPlaylist } = usePlaylistStore();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (spotifyApi) {
      spotifyApi.getPlaylistTracks(currPlaylist?.id).then((data) => {
        if (data.body) {
          setTracks(data.body.items);
        }
      });
    }
  }, [spotifyApi, currPlaylist]);

  return (
    <div>
      {tracks.length === 0 ? (
        <SongCardSkeletonWrapper />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {tracks.map((song) => {
            let track = song.track;

            if (track.name != "") {
              return <SongCard key={track.id} song={track} />;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default AddTag;
