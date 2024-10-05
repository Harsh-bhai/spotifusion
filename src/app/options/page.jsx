"use client";
import OptionCard from "@/components/option/optionCard";
import React, { useEffect } from "react";
import { FaTags } from "react-icons/fa";
import { MdInsights } from "react-icons/md";
import UseSpotify from "@/hooks/useSpotify";
import { usePlaylistStore } from "@/store/usePlaylistStore";
import { useTagStore } from "@/store/useTagStore";
import { useSpotifyStore } from "@/store/useSpotifyStore";

const Options = () => {
  const spotifyApi = UseSpotify();
  const { setPlaylists } = usePlaylistStore();
  const { setTagMap } = useTagStore();
  const { setSpotifyId } = useSpotifyStore();

  const createSpotifyUser = async(userInfo) =>{
    let data = await fetch("/api/addspotifyuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userInfo,
        spotifyId: userInfo.id
      })
    })
    let response = await data.json();
    console.log(response, "response");
  }



  useEffect(() => {
    if (spotifyApi) {
      spotifyApi.getUserPlaylists().then((data) => {
        if (data.body) {
          setPlaylists(data.body.items);
        }
      });

      spotifyApi.getMe().then((data) => {
        if (data.body) {
          console.log(data.body);
          
          createSpotifyUser(data.body);
          // fetchTags(data.body.id);
          setSpotifyId(data.body.id);
        }
      });
    }
  }, [spotifyApi, setPlaylists]);

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 lg:px-16">
      <h1 className="text-4xl font-bold mb-4 text-green-600">
          Options
        </h1>
        <p className="mb-10">Choose an option</p>
      <div className="flex lg:mt-20 flex-col lg:flex-row justify-evenly gap-4 lg:gap-0 items-center w-full lg:mx-20">
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
