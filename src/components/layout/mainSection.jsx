"use client";
import React, { useState, useEffect } from "react";
import SpiningLogo from "./spiningLogo";
import { FaSpotify } from "react-icons/fa";
import { signIn} from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSpotifyStore } from "@/store/useSpotifyStore";
import SpotifyButton from "./spotifyButton";


const MainSection = () => {

  const { data: session } = useSession();
  console.log(session);

  const { accessToken } = useSpotifyStore();
  
  
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-2xl lg:-translate-y-1/4 -translate-y-1/2 ">
          <div className="flex justify-center items-center lg:space-x-10">
            <SpiningLogo />

            <div className="flex flex-col justify-center items-start">
              <h1 className="lg:text-7xl text-4xl font-bold bg-gradient-to-br from-green-100 via-green-400 to-green-700 bg-clip-text text-transparent">
                SpotiFusion
              </h1>
              <p className="lg:py-6 py-4 ml-2 text-xs lg:text-base">
                Organize your music - with the power of TAGS
              </p>
            </div>
          </div>

         {!accessToken ? <SpotifyButton text={"Login with Spotify"} onClick={() => signIn("spotify", { callbackUrl: "/options" })}/>
          :
          <Link href="/options">
            <SpotifyButton text={"Get Started"} />
          </Link>}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
