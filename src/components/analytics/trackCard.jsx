/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useThemeStore } from "@/store/useThemeStore";

export default function TrackCard({ song }) {
  const { theme } = useThemeStore();
  

  return (
    <div
      className={`flex items-start space-x-4 p-4 ${
        theme === "light" ? "bg-gray-300" : "bg-neutral"
      } rounded-lg shadow-lg`}
    >
      
      <Image
        src={song?.album.images[2]?.url}
        alt={song?.name}
        width={64}
        height={64}
        className="w-16 h-16 object-cover rounded-sm md:rounded"
      />
      <div className="flex flex-col">
        <h3
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-lg font-semibold`}
        >
          {song?.name}
        </h3>
        <p
          className={`${theme === "light" ? "text-gray-700" : "text-gray-400"}`}
        >
          {song?.artists.map((artist, index) => (
            <span key={artist.id}>
              {artist.name}
              {index < song?.artists.length - 1 && ", "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
