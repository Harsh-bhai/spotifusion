"use client";
import UseSpotify from "@/hooks/useSpotify";
import { useState, useEffect } from "react";
import HeadingWrapper from "../wrappers/headingWrapper";
import Divider from "../layout/divider";


const GetRecomendations = () => {
    const spotifyApi = UseSpotify();
    const [getRecom, setGetRecom] = useState();
    useEffect(() => {
      if (spotifyApi) {
        spotifyApi.getRecommendations({})
      }
    }, [spotifyApi]);
    console.log(getRecom, "getrecom");
  return (
    <div>GetRecomendations</div>
  )
}

export default GetRecomendations