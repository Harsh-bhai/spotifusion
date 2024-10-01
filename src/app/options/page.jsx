"use client";
import OptionCard from "@/components/OptionCard";
import React, { useEffect } from "react";
import { FaTags } from "react-icons/fa";
import { MdInsights } from "react-icons/md";
import UseSpotify from "@/hooks/useSpotify";
import { useSelector, useDispatch } from "react-redux";
import { setPlaylists } from "@/redux/slices/playlistSlice";

const Options = () => {
  const dispatch = useDispatch();
  const spotifyApi = UseSpotify(); // Use the memoized spotifyApi

  useEffect(() => {
    if (spotifyApi) {
      spotifyApi.getUserPlaylists().then((data) => {
        if (data.body) {
          console.log(data.body, "here");
          dispatch(setPlaylists(data.body.items)); // Dispatch only serializable playlist data
        }
      });
    }
  }, [spotifyApi, dispatch]);

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
