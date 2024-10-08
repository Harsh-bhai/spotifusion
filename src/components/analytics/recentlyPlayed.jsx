"use client";
import UseSpotify from "@/hooks/useSpotify";
import TrackCard from "./trackCard";
import { useState, useEffect } from "react";
import HeadingWrapper from "../wrappers/headingWrapper";
import Divider from "../layout/divider";
import TrackCardSkeletonWrapper from "../wrappers/trackCardSkeletonWrapper";

const RecentlyPlayed = () => {
  const spotifyApi = UseSpotify();
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    if (spotifyApi) {
      spotifyApi.getMyRecentlyPlayedTracks().then((data) => {
        if (data.body) {
          setTracks(data.body.items);
        }
      });
    }
  }, [spotifyApi]);
  console.log(tracks, "tracks");
  

  return (
    <div>
      {tracks.length === 0 ? (
        <TrackCardSkeletonWrapper />
      ) : (
        <div>
          <HeadingWrapper
            heading={"Recently played"}
            desc={"Your top 5 recently played tracks are below"}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {tracks?.slice(0, 5).map((track) => (
                <TrackCard song={track.track} key={track.track.id} />
              ))}
            </div>
          </HeadingWrapper>
          <Divider />
        </div>
      )}
    </div>
  );
};

export default RecentlyPlayed;
