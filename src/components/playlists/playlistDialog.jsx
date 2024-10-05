import React, { useState } from "react";
import { useTagStore } from "@/store/useTagStore";
import UseSpotify from "@/hooks/useSpotify";

const PlayListDialog = ({ tagArray, setPlaylistId }) => {
    const {tagSongIdMap} =  useTagStore();
    const spotifyApi = UseSpotify();
    const [tagName, setTagName] = useState('')

  const handleClose = () => {
    document.getElementById("my_modal_1").close(); // Close modal on "Close" button click
  };

  const createNewPlaylist = async (e, playlistName) => {
    e.preventDefault();
    console.log(tagName, "tagname");
    const songUris = tagSongIdMap[tagName].map(id => `spotify:track:${id}`);
    console.log(songUris, "songUris");
    

    
    
    try {
      // 1. Create a new playlist
      const createPlaylistResponse = await spotifyApi.createPlaylist(playlistName, {
        description: 'My new playlist',
        public: true,  // Change to false if you want a private playlist
      });
      
      const playlistId = createPlaylistResponse.body.id;
      setPlaylistId(playlistId);
      console.log(`Playlist created: ${playlistId}`);
  
      // 2. Add tracks to the playlist
      // Spotify uses track URIs in the format "spotify:track:trackId"
      await spotifyApi.addTracksToPlaylist(playlistId, songUris);

      document.getElementById("my_modal_1").close();
      document.getElementById("playlistcreated").showModal();
      
      console.log("Tracks added to the playlist");
  
    } catch (error) {
      console.error("Error creating playlist or adding tracks:", error);
    }
  };
  

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Select a Tag to create a Playlist</h3>

          {/* Dropdown Select Field */}
          <div className="py-4">
            <label htmlFor="option-select" className="block mb-2">
              Select a Tag:
            </label>
            <select
              id="option-select"
              className="select select-bordered w-full"
              value={tagName}
              onChange={(e) => setTagName(e.target.value)} // Handle tag selection
            >
              <option disabled value="">
                Select a Tag
              </option>
              {tagArray.length > 0 &&
                tagArray.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
            </select>
          </div>

          <div className="modal-action">
            {/* Create Playlist Button */}
            <button onClick={(e) => createNewPlaylist(e, tagName)} type="button" className="btn hover:text-black hover:bg-green-500">
              Create Playlist
            </button>

            {/* Close the modal on this button */}
            <button
              type="button"
              className="btn"
              onClick={handleClose} // Close modal here
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PlayListDialog;
