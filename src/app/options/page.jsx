"use client";
import OptionCard from "@/components/option/optionCard";
import React, { useEffect } from "react";
import { FaTags } from "react-icons/fa";
import { MdInsights } from "react-icons/md";
import UseSpotify from "@/hooks/useSpotify";
import { usePlaylistStore } from "@/store/usePlaylistStore";

const Options = () => {
  const spotifyApi = UseSpotify();
  const { setPlaylists } = usePlaylistStore();
  useEffect(() => {
    if (spotifyApi) {
      spotifyApi.getUserPlaylists().then((data) => {
        if (data.body) {
          setPlaylists(data.body.items);
        }
      });
    }
  }, [spotifyApi, setPlaylists]);

  return (
    <div className="flex flex-col justify-center lg:space-y-20 items-center h-[90vh]">
      <h1 className="text-4xl font-bold mb-12">Choose Your Option</h1>
      <div className="flex flex-col lg:flex-row justify-evenly gap-4 lg:gap-0 items-center w-full lg:mx-20">
        <OptionCard
          symbol={<FaTags />}
          name="Add Tags"
          description="Organize your Spotify playlists effortlessly with custom tags and more."
          route="/playlists"
        />
        <OptionCard
          symbol={<MdInsights />}
          name="Analytics"
          description="Gain insights into your listening habits and optimize your playlists for a personalized experience."
          route="/options"
        />
      </div>
    </div>
  );
};

export default Options;
