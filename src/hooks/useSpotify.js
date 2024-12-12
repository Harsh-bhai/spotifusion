"use client";
import { signIn, useSession } from "next-auth/react";
import SpotifyWebApi from "spotify-web-api-node";
import { useMemo, useEffect } from "react";
import { useSpotifyStore } from "@/store/useSpotifyStore";

/**
 * @returns {SpotifyWebApi | null} 
 */
const UseSpotify = () => {
  const { data: session, status } = useSession();
  const { accessToken, setAccessToken } = useSpotifyStore();

  useEffect(() => {
    if (session && !accessToken) {
      if (
        // session.error === "RefreshAccessTokenError" ||
        session.expires < Date.now()
      ) {
        console.log("happening");
        signIn();
      } else {
        setAccessToken(session.user.accessToken);
      }
    }
  }, [session]);

  return useMemo(() => {
    if (accessToken) {
      const api = new SpotifyWebApi({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      });
      api.setAccessToken(accessToken);
      return api;
    }
    return null;
  }, [accessToken]);
};

export default UseSpotify;
