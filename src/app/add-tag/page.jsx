"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UseSpotify from "@/hooks/useSpotify";
import SongCard from "@/components/songCard";

const AddTag = () => {
  const spotifyApi = UseSpotify();
  const dispatch = useDispatch();
  const { currPlaylist } = useSelector((state) => state.playlist);
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

  console.log(tracks);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-center">
      {tracks.map((song) => {
        let track = song.track;
        console.log(track, "song");

        return <SongCard key={track.id} song={track} tags = {["rock", "gym", "soothing", "study", "relaxing"]} />;
      })}
    </div>
  );
};

export default AddTag;
