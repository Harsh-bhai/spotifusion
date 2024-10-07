import Image from "next/image";
import { useThemeStore } from "@/store/useThemeStore";
import TagBadge from "../tags/tagBadge";

const ArtistCard = ({ artist }) => {
  const { theme } = useThemeStore();
  return (
    <div
      className={`group card card-compact card-bordered ${
        theme === "light" ? "bg-gray-300" : "bg-neutral"
      } w-72 shadow-lg hover:shadow-[0_0_15px_5px_rgba(34,197,94,0.7)] 
                 hover:scale-105 transition-all transform duration-300 `}
    >
      <figure>
        <Image
          src={artist.images[0]?.url}
          alt="artist"
          width={300}
          height={300}
          className="rounded-lg "
        />
      </figure>
      <div className="card-body p-4">
        <h2
          className={`${
            theme === "light"
              ? "group-hover:text-green-700"
              : "group-hover:text-green-300"
          } card-title text-lg font-semibold`}
        >
          {artist.name}
        </h2>
      </div>
    </div>
  );
};

export default ArtistCard;
