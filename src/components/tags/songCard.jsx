/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TagBadge from "./tagBadge";
import { useThemeStore } from "@/store/useThemeStore";
import { IoIosAddCircle } from "react-icons/io";
import { useTagStore } from "@/store/useTagStore";
import { useSpotifyStore } from "@/store/useSpotifyStore";
import { usePlaylistStore } from "@/store/usePlaylistStore";

export default function SongCard({ song }) {
  const { theme } = useThemeStore();
  const [tagName, setTagName] = useState("");
  const [tagArray, setTagArray] = useState([]);
  const { tagMap, setTagMap } = useTagStore();
  const { currPlaylist } = usePlaylistStore();
  const { spotifyId } = useSpotifyStore();
  const [isModalOpen, setIsModalOpen] = useState(false); // Local modal state

  useEffect(() => {
    const tags = tagMap[currPlaylist.id]?.[song.id] || [];
    setTagArray(tags);
  }, []);

  const removeTag = async (tag) => {
    const updatedTags = tagArray.filter((t) => t !== tag);
    setTagArray(updatedTags);

    const updatedSongMap = {
      ...(tagMap[currPlaylist.id] || {}),
      [song.id]: updatedTags,
    };

    setTagMap({ ...tagMap, [currPlaylist.id]: updatedSongMap });

    await updateTags({
      [currPlaylist.id]: {
        [song.id]: [...updatedTags], // Ensure you're sending the right data
      },
    }, spotifyId);
    
  };

  const addTag = (tag) => {
    setTagArray((prevTags) => [...prevTags, tag]);
  };

  const handleTagChange = (e) => {
    setTagName(e.target.value);
  };

  const updateTags = async (tags, spotifyId) => {

    try {
      const tagsToSend = { tags, spotifyId };
      await fetch("/api/tags", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tagsToSend),
      });
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      addTag(tagName);
      const updatedTags = [...new Set([...tagArray, tagName])];
      const updatedSongMap = {
        ...tagMap[currPlaylist.id], // Retain other songs in the playlist
        [song.id]: updatedTags, // Update the current song's tags
      };

      setTagMap({...tagMap, [currPlaylist.id]: updatedSongMap});
      setTagName("");
      setIsModalOpen(false);

      // Sync the updated tagMap with the backend
      await updateTags(
        {
          [currPlaylist.id]: {
            [song.id]: [...tagArray, tagName], // Ensure you're sending the right data
          },
        },
        spotifyId
      );
      console.log("Tags updated:", tagMap);
      
  };

  return (
    <div
      className={`flex items-start space-x-4 p-4 ${
        theme === "light" ? "bg-gray-300" : "bg-neutral"
      } rounded-lg shadow-lg`}
    >
      
      <Image
        src={song.album.images[2]?.url}
        alt={song.name}
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
          {song.name}
        </h3>
        <p
          className={`${theme === "light" ? "text-gray-700" : "text-gray-400"}`}
        >
          {song.artists.map((artist, index) => (
            <span key={artist.id}>
              {artist.name}
              {index < song.artists.length - 1 && ", "}
            </span>
          ))}
        </p>

        <div className="flex flex-wrap justify-start items-center mt-2 max-w-full">
          {tagArray.map((tag, index) => (
            <TagBadge
              key={`${tag}-${song.id}`}
              index={index}
              text={tag}
              onClick={async () => {await removeTag(tag); console.log(tagMap, "tagMap");}}
            />
          ))}
          <div>
            <IoIosAddCircle
              onClick={() => setIsModalOpen(true)} // Open local modal
              className="text-3xl text-green-500 cursor-pointer hover:text-green-300 transition-colors"
            />
          </div>
        </div>

        {/* Local modal for adding tags */}
        {isModalOpen && (
          <dialog open className="modal animate-open ">
            <div className="modal-box  hover shadow-[0_0_15px_5px_rgba(0,0,0,0.7)] ">
              <h3 className="font-bold text-lg">Add a New Tag</h3>
              <form onSubmit={handleSubmit} className="py-4">
                <input
                  type="text"
                  value={tagName}
                  onChange={handleTagChange}
                  placeholder="Enter tag name"
                  className="input input-bordered w-full"
                  required
                  autoFocus // Automatically focus this input
                />
                <div className="modal-action">
                  <button type="submit" className="btn">
                    Add Tag
                  </button>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setIsModalOpen(false)} // Close local modal
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
}
