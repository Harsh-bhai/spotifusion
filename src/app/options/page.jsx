"use client";
import OptionCard from "@/components/OptionCard"; // Make sure the path is correct
import React from "react";
import { FaTags } from "react-icons/fa";
import { MdInsights } from "react-icons/md";

const Options = () => {
  return (
    <div className="flex flex-col justify-center lg:space-y-20 items-center h-[90vh]">
      {/* Large title at the top center */}
      <h1 className="text-4xl font-bold mb-12 ">Choose Your Option</h1>

      {/* Option cards */}
      <div className="flex flex-col lg:flex-row justify-evenly gap-4 lg:gap-0 items-center w-full lg:mx-20">
        <OptionCard
          symbol={<FaTags />} // Use any symbol or icon here
          name="Add Tags"
          description="Organize your Spotify playlists effortlessly with custom tags and more."
          route= "/"
        />
        <OptionCard
          symbol={<MdInsights />} // Use any symbol or icon here
          name="Analytics"
          description="Gain insights into your listening habits and optimize your playlists for a personalized experience."
          route= "/options"
        />
      </div>
    </div>
  );
};

export default Options;
