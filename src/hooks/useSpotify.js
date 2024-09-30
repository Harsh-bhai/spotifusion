"use client";
import { signIn, useSession } from "next-auth/react";
import SpotifyWebApi from "spotify-web-api-node";
import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "@/redux/slices/spotifySlice";

const UseSpotify = () => {
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  const accessToken = useSelector((state) => state.spotify.accessToken);

  useEffect(() => {
    if (session && !accessToken) {
      if (session.error === "RefreshAccessTokenError" || session.expires < Date.now()) {
        signIn();
      } else {
        dispatch(setAccessToken(session.user.accessToken));
      }
    }
  }, [session, dispatch, accessToken]);

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

