import React from "react";

const SuccessModal = ({ playlistId }) => {
  const openSpotify = () => {
    // Generate the Spotify URI and Web URL
    const spotifyUri = `spotify:playlist:${playlistId}`; // Spotify URI
    const spotifyWebUrl = `https://open.spotify.com/playlist/${playlistId}`; // Web URL

    // Open Spotify client
    window.location.href = spotifyUri;

    // Fallback to the web player after a short delay
    setTimeout(() => {
      window.open(spotifyWebUrl, "_blank");
    }, 1000); // Adjust delay if needed
    () => document.getElementById("playlistcreated").close()
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="playlistcreated" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Playlist Created!</h3>
          <p className="py-4">
            Your playlist has been successfully created. Click the button below to open it in Spotify.
          </p>
          <div className="modal-action">
            <button className="btn hover:text-black hover:bg-green-500" onClick={openSpotify}>
              Open in Spotify
            </button>
            <form method="dialog">
              {/* If there is a button in the form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SuccessModal;
