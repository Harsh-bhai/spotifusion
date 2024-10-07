"use client";
import UseSpotify from "@/hooks/useSpotify";
import TrackCard from "./trackCard";
import { useState, useEffect } from "react";
import HeadingWrapper from "../wrappers/headingWrapper";
import Divider from "../layout/divider";

const TopTracks = () => {
  const spotifyApi = UseSpotify();
  const [tracks, setTracks] = useState();
  useEffect(() => {
    if (spotifyApi) {
      spotifyApi.getMyTopTracks().then((data) => {
        if (data.body) {
          setTracks(data.body.items);
        }
      });
    }
  }, [spotifyApi]);
  
  return (
    <div>
      <HeadingWrapper
        heading={"Top Tracks"}
        desc={"Your top 5 most played tracks are below"}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {tracks?.slice(0, 5).map((track) => (
            <TrackCard song={track} key={track.id} />
          ))}
        </div>
      </HeadingWrapper>
      <Divider />
    </div>
  );
};

export default TopTracks;
