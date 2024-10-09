"use client";
import React from 'react'
import Image from 'next/image'
import UseSpotify from '@/hooks/useSpotify'
import { useEffect, useState } from 'react'
import { useSpotifyStore } from '@/store/useSpotifyStore';
import countries from '@/utils/country';
const Profile = () => {
  const spotifyApi = UseSpotify();
  const { userInfo } = useSpotifyStore();
  console.log(userInfo, "userinfo");

  

  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <Image
      src={userInfo?.images[1]?.url}
      className="max-w-sm rounded-full shadow-2xl" width={300} height={300} alt="img" />
     <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold">{userInfo?.display_name}</h1>
            <p className="text-xl">Email: {userInfo?.email}</p>
            <p className="text-xl">Country: {countries[userInfo?.country]}</p>
            <p className="text-xl ">
              Spotify Version: {userInfo?.product === "premium" ? "Premium" : "Free"}
            </p>
            <p className="text-xl">Followers: {userInfo?.followers?.total}</p>
          </div>
  </div>
</div>
  )
}

export default Profile