"use client";
import React, { useEffect, useState } from "react";
import UseSpotify from "@/hooks/useSpotify";
import SongCard from "@/components/tags/songCard";
import { usePlaylistStore } from "@/store/usePlaylistStore";
import SongCardSkeletonWrapper from "@/components/wrappers/songCardSkeletonWrapper";
import MyButton from "@/components/layout/myButton";
import PlayListDialog from "@/components/playlists/playlistDialog";
import { useTagStore } from "@/store/useTagStore";
import { useSpotifyStore } from "@/store/useSpotifyStore";
import SearchBar from "@/components/layout/searchBar";
import SuccessModal from "@/components/tags/sucessModal";

const AddTag = () => {
  const spotifyApi = UseSpotify();
  const { currPlaylist } = usePlaylistStore();
  const [tracks, setTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State to track search term
  const { tagMap, playListTagArray, setTagMap, setplayListTagArray, setTagSongIdMap, tagSongIdMap } =
    useTagStore();
  const { spotifyId } = useSpotifyStore();
  const tempTag = [];
  const tempTagSongidMap = {};
  const [playlistId, setPlaylistId] = useState('')

  useEffect(() => {
    if (spotifyApi) {
      spotifyApi.getPlaylistTracks(currPlaylist?.id).then((data) => {
        if (data.body) {
          setTracks(data.body.items);
        }
      });
    }
  }, [spotifyApi, currPlaylist]);

  useEffect(() => {
    calculateTags();
    fetchTags(spotifyId);
    calcTagSongIdMap();
  }, []);

  useEffect(() => {
    console.log("123");
    
    calculateTags();
    calcTagSongIdMap();
  }, [tagMap]);
  

  const calculateTags = () => {
    let songids = Object.entries(tagMap[currPlaylist?.id] ?? {});
    songids.forEach((song) => {
      tempTag.push(...song[1]);
    });
    setplayListTagArray([...new Set(tempTag)]);
    console.log(playListTagArray, "playListTagArray");
  };

  const calcTagSongIdMap = () => {
    let tempTagSongidMap = {}; // Initialize an empty map
    let songids = Object.entries(tagMap[currPlaylist?.id] ?? {}); // Get all song ID and tag entries
  
    playListTagArray.forEach((tag) => {
      songids.forEach((song) => {
        if (song[1].includes(tag)) {
          // If the tag already exists in the map, push the song ID
          if (tempTagSongidMap[tag]) {
            tempTagSongidMap[tag].push(song[0]);
          } else {
            // Otherwise, create a new array with the song ID
            tempTagSongidMap[tag] = [song[0]];
          }
        }
      });
    });
  
    setTagSongIdMap(tempTagSongidMap);
    console.log(tagSongIdMap, "tagSongIdMap");
  };

  const fetchTags = async (spotifyId) => {
    try {
      const data = await fetch("/api/tags", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ spotifyId: spotifyId }),
      });
      const tags = await data.json();
      setTagMap(tags);
    } catch (error) {
      console.log("error :", error);
    }
  };

  // Function to filter songs based on search term
  const filteredTracks = tracks.filter((song) =>
    song.track.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {tracks.length === 0 ? (
        <SongCardSkeletonWrapper />
      ) : (
        <div>
          <PlayListDialog tagArray={playListTagArray} setPlaylistId={setPlaylistId}/>
          <SuccessModal playlistId={playlistId} />
          <div className="min-h-screen flex flex-col  py-12 px-4 lg:px-10">
            <div className="mx-6">
              <div className="flex justify-center">
                <SearchBar onSearch={setSearchTerm} /> {/* Pass setSearchTerm as a prop */}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-4xl font-bold mb-4 text-green-600">
                    {currPlaylist?.name}
                  </h1>
                  <p className="mb-3">Add tags to your playlist</p>
                </div>
                <MyButton
                  text={"Create Playlist"}
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {filteredTracks.map((song, index) => {
                let track = song.track;
                if(track.album.images.length > 0) {
                  return <SongCard key={index} song={track} />;
                }
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTag;
