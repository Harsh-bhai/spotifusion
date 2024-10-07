"use client";
import UseSpotify from "@/hooks/useSpotify";
import { useState, useEffect } from "react";
import HeadingWrapper from "../wrappers/headingWrapper";
import Divider from "../layout/divider";
import ArtistCard from "./artistCard";

const TopArtists = () => {
  const spotifyApi = UseSpotify();
  const [artists, setArtists] = useState();
  useEffect(() => {
    if (spotifyApi) {
      spotifyApi.getMyTopArtists().then((data) => {
        if (data.body) {
          setArtists(data.body.items);
        }
      });
    }
  }, [spotifyApi]);
  console.log(artists, "artists");

  return (
    <div>
      <HeadingWrapper
        heading={"Top Artists"}
        desc={"Your top 8 most played artists are below"}
      >
        <div className="grid  place-items-center justify-between items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-28 w-full max-w-7xl mx-auto">
          {artists?.slice(0, 8).map((artist) => (
            <ArtistCard artist={artist} key={artist.id} />
          ))}
        </div>
      </HeadingWrapper>
      <Divider />
    </div>
  );
};

export default TopArtists;
