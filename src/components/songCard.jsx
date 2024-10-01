import React from "react";
import Image from "next/image";
import TagBadge from "./TagBadge";
import AddTagModal from "./addTagModal";

export default function SongCard({ song, tags }) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-base-100  rounded-lg shadow-lg">
      {/* Song Image */}
      <Image
        src={song.album.images[2]?.url} // Use smaller image for optimal rendering
        alt={song.name}
        width={64}
        height={64}
        className="w-16 h-16 object-cover rounded-md"
      />

      {/* Song Details */}
      <div className="flex flex-col">
        {/* Song Name */}
        <h3 className="text-white text-lg font-semibold">{song.name}</h3>

        {/* Artists */}
        <p className="text-gray-400">
          {song.artists.map((artist, index) => (
            <span key={artist.id}>
              {artist.name}
              {index < song.artists.length - 1 && ", "}
            </span>
          ))}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-start items-center mt-2 max-w-full">
          {tags.map((tag, index) => (
            <TagBadge key={index} text={tag} index={index} />
          ))}
          <AddTagModal/>
          
        </div>
      </div>
    </div>
  );
}
