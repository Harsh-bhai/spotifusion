"use client";
import UseSpotify from "@/hooks/useSpotify";
import { useState, useEffect } from "react";
import HeadingWrapper from "../wrappers/headingWrapper";
import Divider from "../layout/divider";
import { useRecomendStore } from "@/store/useRecomendStore";
import TrackCard from "./trackCard";
import SuccessModal from "../tags/sucessModal";

const GetRecomendations = () => {
  const spotifyApi = UseSpotify();
  const [getRecom, setGetRecom] = useState();
  const { artistsArr, setSongids, songids } = useRecomendStore();
  const [reload, setReload] = useState(1);
  const [playlistId, setPlaylistId] = useState("");
  const randomNo = Math.floor(Math.random() * 100) + 1;

  useEffect(() => {
    if (spotifyApi && artistsArr) {
      spotifyApi
        .getRecommendations({
          seed_artists: artistsArr,
          min_energy: 0.4,
          min_popularity: 50,
        })
        .then((data) => {
          if (data.body) {
            setGetRecom(data.body.tracks);
            setSongids(data.body.tracks.map((track) => `spotify:track:${track.id}`));
          }
        });
    }
  }, [artistsArr, spotifyApi, reload, setSongids]);

  const createNewPlaylist = async (e, playlistName, songUris, randomNo) => {
    e.preventDefault();
    
    try {
      // 1. Create a new playlist
      const createPlaylistResponse = await spotifyApi.createPlaylist(playlistName, {
        description: `Spotifusion Recomendations ${randomNo}`,
        public: true,  // Change to false if you want a private playlist
      });
      
      const playlistId = createPlaylistResponse.body.id;
      setPlaylistId(playlistId);
      console.log(`Playlist created: ${playlistId}`);
  
      // 2. Add tracks to the playlist
      // Spotify uses track URIs in the format "spotify:track:trackId"
      await spotifyApi.addTracksToPlaylist(playlistId, songUris);
      document.getElementById("playlistcreated").showModal();
      
      console.log("Tracks added to the playlist");
  
    } catch (error) {
      console.error("Error creating playlist or adding tracks:", error);
    }
  };
  
  

  return (
    <div>
      <SuccessModal playlistId={playlistId} />
      <HeadingWrapper
        heading={"Get Recomendations"}
        desc={"Songs based on your top artists are below"}
        btnText={"Create Playlist"}
        setState={() => setReload(reload + 1)} // Refreshes on click
        onClick={(e) => createNewPlaylist(e, `Spotifusion Recomendations ${randomNo}`, songids, randomNo)}
      >
        <div
          key={reload}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
        >
          {getRecom?.map((track) => (
            <TrackCard song={track} key={track.id} />
          ))}
        </div>
      </HeadingWrapper>
      <Divider />
    </div>
  );
};

export default GetRecomendations;